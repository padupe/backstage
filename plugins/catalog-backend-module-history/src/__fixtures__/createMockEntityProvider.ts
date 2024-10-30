/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createBackendModule } from '@backstage/backend-plugin-api';
import {
  ANNOTATION_LOCATION,
  ANNOTATION_ORIGIN_LOCATION,
  Entity,
} from '@backstage/catalog-model';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { simpleDefer } from './simpleDefer';
import merge from 'lodash/merge';
import { EntityProviderConnection } from '@backstage/plugin-catalog-node';

type Command =
  | { type: 'upsert'; entity: Entity }
  | { type: 'delete'; entityRef: string };

export function createMockEntityProvider() {
  const ready = simpleDefer<void>();
  let deferredCommand = simpleDefer<Command>();

  async function runLoop(connection: EntityProviderConnection) {
    for (;;) {
      const command = await deferredCommand.promise;
      deferredCommand = simpleDefer();

      if (command.type === 'upsert') {
        const entity = merge(
          {
            metadata: {
              annotations: {
                [ANNOTATION_LOCATION]: 'url:http://mockEntityProvider.com',
                [ANNOTATION_ORIGIN_LOCATION]:
                  'url:http://mockEntityProvider.com',
              },
            },
          },
          command.entity,
        );
        await connection.applyMutation({
          type: 'delta',
          removed: [],
          added: [{ locationKey: 'mock', entity }],
        });
      } else if (command.type === 'delete') {
        await connection.applyMutation({
          type: 'delta',
          removed: [{ locationKey: 'mock', entityRef: command.entityRef }],
          added: [],
        });
      }
    }
  }

  function addMockProviderEntity(entity: Entity) {
    deferredCommand.resolve({ type: 'upsert', entity });
  }

  function removeMockProviderEntity(entityRef: string) {
    deferredCommand.resolve({ type: 'delete', entityRef });
  }

  const mockProvider = createBackendModule({
    pluginId: 'catalog',
    moduleId: 'mockEntityProvider',
    register(reg) {
      reg.registerInit({
        deps: { catalogProcessing: catalogProcessingExtensionPoint },
        async init({ catalogProcessing }) {
          catalogProcessing.addEntityProvider({
            getProviderName: () => 'mockEntityProvider',
            connect: async conn => {
              runLoop(conn);
              ready.resolve();
            },
          });
        },
      });
    },
  });

  return {
    mockProvider,
    addMockProviderEntity,
    removeMockProviderEntity,
    catalogReadyPromise: ready.promise,
  };
}
