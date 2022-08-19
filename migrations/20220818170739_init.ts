import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('usuarios', table => {
    table.increments('id')
    table.string('email', 255).notNullable().unique()
    table.string('name', 50).nullable()
    table.string('password', 255).notNullable()
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('usuarios')
}