const controller = require('./user.controller');
const joi = require('joi');
module.exports = [{
    method: 'GET',
    path: '/users',
    options: {

        handler: controller.find,
        tags: ['api'],
        description: 'Get all user',
        notes: 'Returns alluser'
    },
},

//create get method for access single id 
// {
//     method: 'GET',
//     path: '/users/{id}',
//     options: {
        
//         validation: {
//             params: joi.object({
//                 id: joi.string().required(),

//             }),
//         },
//         handler: controller.findone,
//         tags: ['api'],
//         description: 'Getting candidate by id',
//         notes: 'Returns candidate by id',

//     },
// },

//create post method
{
    method: 'POST',
    path: '/user',
    options: {
    handler: controller.create,
    validation:{
        payload: joi.object({
            name: joi.string().required(),
            address: joi.string().required()
        }),
    },
    tags: ['api'],
    description:'Create new user',
    notes: 'returns newly created user'
    },

},

//create put method 
{
    method: 'PUT',
    path: '/users/{id}',
    options:{
    
    validation:{
        params: joi.object({
            id: joi.string().required(),
        }),
    },
    handler: controller.update,
    tags: ['api'],
    description:'update user id',
    notes: 'returns newly user id'
    },
},

//create delete method
{
    method: 'DELETE',
    path: '/users/{id}',
    options:{
    
    validation:{
        params: joi.object({
            id: joi.string().required(),
        }),
    },
    handler: controller.delete,
    tags: ['api'],
    description:'Delete user by id',
    notes: 'Delete user id'
    },
},


]