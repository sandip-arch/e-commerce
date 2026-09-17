const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {

    await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log(err);
    });

};

module.exports = connectDB;