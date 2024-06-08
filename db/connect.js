const mongoose = require("mongoose");

// uri="mongodb+srv://canikissyou1106:pushpa123@cluster0.gcnf4lq.mongodb.net/"

const connectDB = (uri) => {
    // console.log("Connect db");
    return mongoose.connect(uri,{
    });
};


module.exports=connectDB