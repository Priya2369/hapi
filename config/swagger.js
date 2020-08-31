const hapiSwagger = require('hapi-swagger');
const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const userModule = require('../user/user.module')
const swaggerOption = {
    info:{
        title: 'Test API Documentation',
        version: '0.0.1',
    },
};

module.exports = [
    inert,
    vision,
    {plugin: hapiSwagger, options: swaggerOption},
    userModule
];