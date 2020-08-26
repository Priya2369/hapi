const Hapi = require('@hapi/hapi');
//database
const mongoose = require('mongoose');

const bd = require('./database');

// mongoose.connect("mongodb+srv://pass:78nncuhnC0Ncmce6@cluster0.baot7.mongodb.net/api?retryWrites=true&w=majority",{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });
// mongoose.connection.once('open',() =>{
//     console.log('bd connected');
// }).catch(err=>{
//     console.log("db error");
// })


const User = require('./model/User');

//create server 
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    //create get method 
    server.route({
        method: 'GET',
        path: '/users',
        handler: async (request, h) => {
            try {
                const user = await User.find().exec();
                return h.response(user);
            } catch (error) {
                return h.response(error).code(500);
            }

        }

    });

    //create get method for access single id 
    // server.route({
    //     method: 'GET',
    //     path: '/users/{id}',
    //     handler: async (request, h) => {
    //         try {
    //             const user = await User.findById(Request.params.id).exec();
    //             return h.response(user);
    //         } catch (error) {
    //             return h.response(error).code(500);
    //         }

    //     }

    // });

    //create post method
    server.route({
        method: 'POST',
        path: '/users',
    handler: async (request, h) => {
        try{
         const user = new User(request.payload);
         const result = await user.save();
         return h.response(result);
        }catch (error) {
            return h.response(error).code(500);
        }
    }
        


    });

    await server.start();
    console.log('Server running on port 3000');
};

init();