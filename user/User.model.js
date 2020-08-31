const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
    name:{type:String, required:true},
    address:{type:String, required:true}
},{timestamps:true});

//export the model
module.exports = mongoose.model("User", userSchema);
