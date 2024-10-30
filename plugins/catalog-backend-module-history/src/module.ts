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

import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { applyDatabaseMigrations } from './migrations';

/**
 * The history module for the catalog backend.
 *
 * @public
 */
export const catalogModuleHistory = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'history',
  register(reg) {
    reg.registerInit({
      deps: {
        lifecycle: coreServices.lifecycle,
        database: coreServices.database,
        catalogProcessing: catalogProcessingExtensionPoint,
      },
      async init({ lifecycle, database, catalogProcessing }) {
        // @ts-ignore
        const dbPromise = waitForCatalogInit(catalogProcessing, lifecycle).then(
          async () => {
            const knex = await database.getClient();
            if (database.migrations?.skip !== true) {
              await applyDatabaseMigrations(knex);
            }
            return knex;
          },
        );
      },
    });
  },
});

// Helper function for waiting until the catalog has initialied its own
// database. Since the catalog doesn't have any explicit hooks for this, and
// modules' init run before the plugin does, we instead add a dummy provider
// just for the purpose of hooking into its connect call which happens after the
// catalog is ready.
function waitForCatalogInit(
  catalogProcessing: typeof catalogProcessingExtensionPoint.T,
  lifecycle: typeof coreServices.lifecycle.T,
) {
  return new Promise<void>((resolve, reject) => {
    catalogProcessing.addEntityProvider({
      getProviderName: () => 'historyModuleInitDummy',
      connect: async () => resolve(),
    });
    lifecycle.addShutdownHook(() => {
      reject(new Error('Catalog is shutting down'));
    });
  });
}
