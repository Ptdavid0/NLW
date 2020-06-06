import Knex from "knex";

export async function up(knex:Knex) {
  return knex.schema.createTable('point_items', table =>{
    table.increments('id').primary();

    table.integer('point_id').notNullable().references('id').inTable('points')
    table.integer('item_id').notNullable().references('id').inTable('items')
  })
}
export async function down(knex:Knex) {
  return knex.schema.dropTable('point_items')
}

//Utilizamos o references('id') e o inTable('points/items') para fazer a ligacao entre a point_items e as outras duas tabelas das quais recebe as chaves primarias. Estamos basicamente trazendo as foreinKeys.