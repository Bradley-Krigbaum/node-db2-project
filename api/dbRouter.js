const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
      connection: {
        filename: './data/car-dealer.db3'
      }
})

const router = express.Router();


router.get('/', (request, response) => {
    db('cars')
    .then(cars => {
        response.json(cars);
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({ message: 'Failed to retrieve cars', error });
    })
});

router.get('/:id', (request, response) => {
    const {id} = request.params;

    db('cars').where({id}).first()
    .then(cars => {
        response.json(cars);
    })

    .catch(error => {
        response.status(500).json({ message: 'Failed to retrieve cars', error });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;

    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
            res.status(201).json(newCarEntry);
        });
    })

    .catch (error => {
        console.log(error);
        res.status(500).json({ message: "Failed to store data", error});
    });
});

module.exports = router;