const express = require('express');
const helmet = require('helmet');

const dbRouter = require('./dbRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', dbRouter);

server.get('/', (request, response) => {
    response.send(`
        <h2>Lambda Node Database 2 Project</h2>
        <p>Welcome to the DataBase!</p>
    `);
})

module.exports = server;