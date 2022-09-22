require("dotenv").config();
const { urlencoded } = require("express");
const mongoose = require("mongoose");


function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL ,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
        if(!err)
        console.log("db connected");
        else
        console.log("error");
    })
}

module.exports = connectDB;