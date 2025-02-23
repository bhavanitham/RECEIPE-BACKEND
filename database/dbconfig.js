const mongoose = require('mongoose');

const connectDb = async()=>{
    mongoose.connect("mongodb+srv://adarshvinodhan:legpieze@mydb.sxj7a.mongodb.net/recipe?retryWrites=true&w=majority&appName=mydb",console.log("DB Connected Successfully"));
}

module.exports =  connectDb;
