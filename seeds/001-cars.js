
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
				{ vin: '3243242343243', make: 'Honda', model: 'Acura', mileage: 10000 },
				{ vin: '2313546576576', make: 'Ford', model: 'Mustang GT', mileage: 20000 },
				{ vin: '1307987872382', make: 'Toyota', model: 'Camary', mileage: 30000 }
			]);
    });
};
