const User = require('../user/User.model');
module.exports = {
    async find (request, h)  {
        try {
            const user = await User.find().exec();
            return h.response(user);
         } catch (error) {
            return h.response(error).code(500);
         }

    },

    async findone (request, h)  {
        try{
            var user = await User.findById(request.params.id).exec();
            return h.response(`your database has been findbyid: ${user}`);
        }catch (error) {
            return h.response(error).code(500);
        }
    },

    async create (request, h)  {
        try{
         const user = new User(request.payload);
         const result = await user.save();
         return h.response(result);
        }catch (error) {
            return h.response(error).code(500);
        }
    },

    async update (request, h)  {
        try{
            var user = await User.findByIdAndUpdate(request.params.id, request.payload,{new:true});
            return h.response('your database has been submitted safely: ${user}');
        }catch (error) {
            return h.response(error).code(500);
        }
    },

    async delete (request, h)  {
        try{
            var user = await User.findByIdAndDelete(request.params.id);
            return h.response('your database has been deleted safely: ${user}');
        }catch (error) {
            return h.response(error).code(500);
        }
    }
        

}

