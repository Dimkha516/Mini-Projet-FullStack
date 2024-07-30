const mongoose = require('mongoose');

const connectMongo = async() => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {     
        });
        console.log("Connected to MongoDB");
    }
    catch(err) {
        console.log("Failed connecting to MongoDB", err);
        process.exit();
    }
}


module.exports = connectMongo;