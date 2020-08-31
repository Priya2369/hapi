const Hapi = require('@hapi/hapi');
const swaggerPlugin = require('./config/swagger');
//database
//const mongoose = require('mongoose');

const bd = require('./database');






//create server 
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    //create get method 
    await server.register(swaggerPlugin);

    await server.start();
    console.log('Server running on port 3000');
};

init();

module.exports = init; 