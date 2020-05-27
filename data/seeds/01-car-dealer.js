
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([

        { VIN: 'WDBDA28D2PG096957', 
          make: 'tesla', 
          model: 'model s', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: 'YV1RS592X72672188', 
          make: 'tesla', 
          model: 'model 3', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: '1FTRW12W26FB51988', 
          make: 'tesla', 
          model: 'model x', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: '3C6UR5JL3EG168822', 
          make: 'tesla', 
          model: 'model y', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: '1HSHGG2R1LH255448', 
          make: 'tesla', 
          model: 'cyber truck', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: '2FDLF47M2JCB97402', 
          make: 'jaguar', 
          model: 'i-pace', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' },

        { VIN: '1C3CCCAB4FN554244', 
          make: 'honda', 
          model: 'clarity electric', 
          mileage: 0, 
          transmission_type: 'automatic', 
          title_status: 'clean' }

      ]);
    });
};
