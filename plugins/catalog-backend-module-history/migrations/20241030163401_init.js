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

// @ts-check

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function up(knex) {
  await knex.schema.createTable('module_history__events', table => {
    table
      .bigIncrements('id')
      .primary()
      .comment('Unique sequential ID of the event');
    table.dateTime('event_at').notNullable().comment('When the event happened');
    table.string('event_type').notNullable().comment('The type of event');
    table
      .string('entity_ref')
      .nullable()
      .comment('Affected entity ref, where applicable');
    table
      .text('entity_json', 'longtext')
      .nullable()
      .comment('The body of the affected entity, where applicable');
  });

  if (knex.client.config.client.includes('pg')) {
    await knex.schema.raw(
      `
      CREATE FUNCTION final_entities_change_history()
      RETURNS trigger AS $$
      DECLARE
        event_type TEXT;
        entity_json TEXT;
      BEGIN
        IF (TG_OP = 'INSERT') THEN
          -- Before first stitch completes, an entry is made with a null final_entity.
          -- We still capture INSERT triggers desipte that, just to cover for the case
          -- if this behavior changes some time down the line.
          IF (NEW.final_entity IS NULL) THEN
            RETURN null;
          END IF;
          event_type = 'entity_inserted';
          entity_json = NEW.final_entity;
        ELSIF (TG_OP = 'UPDATE') THEN
          -- Before first stitch completes, an entry is made with a null final_entity.
          IF (OLD.final_entity IS NULL) THEN
            event_type = 'entity_inserted';
          ELSE
            event_type = 'entity_updated';
          END IF;
          entity_json = NEW.final_entity;
        ELSIF (TG_OP = 'DELETE') THEN
          event_type = 'entity_deleted';
          entity_json = OLD.final_entity;
        ELSE
          RETURN null;
        END IF;

        INSERT INTO module_history__events (event_at, event_type, entity_ref, entity_json) VALUES (
          CURRENT_TIMESTAMP,
          event_type,
          lower(
            (entity_json::json->>'kind') || ':' ||
            (entity_json::json->'metadata'->>'namespace') || '/' ||
            (entity_json::json->'metadata'->>'name')
          ),
          entity_json
        );

        RETURN null;
      END;
      $$ LANGUAGE plpgsql;

      CREATE TRIGGER final_entities_change_history
      AFTER INSERT OR UPDATE OF final_entity OR DELETE ON final_entities
      FOR EACH ROW EXECUTE PROCEDURE final_entities_change_history();
      `,
    );
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function down(knex) {
  await knex.schema.raw(
    `
    DROP TRIGGER final_entities_change_history ON final_entities;
    DROP FUNCTION final_entities_change_history();
    `,
  );
  await knex.schema.dropTable('module_history__events');
};
