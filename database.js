const mongoose = require('mongoose');

//create mongoose connection 
 mongoose.connect("mongodb+srv://saktiman:gy5Mr3JiGhOLvSgj@cluster0.baot7.mongodb.net/chunu?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(() => console.log('db connected'))
.catch(err => console.log(err));
//module.exports = con;