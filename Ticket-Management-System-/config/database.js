const mongoose =require("mongoose");
const {MONGO} = require(".");

const connectDB =async()=>{
    await mongoose.connect(MONGO);
    console.log(`Database connected`);
};

module.exports ={
    connectDB,
};