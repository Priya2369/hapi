const mongoose = require('mongoose');

//create mongoose connection 
 mongoose.connect("mongodb+srv://pass:78nncuhnC0Ncmce6@cluster0.baot7.mongodb.net/api?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(() => console.log('db connected'))
.catch(err => console.log(err));
//module.exports = con;