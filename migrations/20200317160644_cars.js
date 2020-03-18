
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.string('vin', 17)
      .notNullable()
      .unique()
      .index();

      tbl
      .string('make', 255).notNullable();

      tbl.string('model', 255).notNullable();

      tbl.integer('mileage', 255);

      tbl.string('transmissionType', 255);

      tbl.string('transmissionStatus', 255);
            

  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
