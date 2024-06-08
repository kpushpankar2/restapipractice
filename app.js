const express = require("express")
const app = express()
require('dotenv').config();
console.log("MONGODB_URL:", process.env.MONGODB_URL);
console.log("PORT",process.env.PORT);

const connectDB = require("./db/connect.js")
app.get("/" , (req,res) =>{
    res.send("Hello I am Pushpankar");
});

const PORT = process.env.PORT||5000;

const products_route = require("./routes/products")

app.use("/api/products",products_route);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log(`Listening on the port ${PORT}`);
    })
}catch(err){
    console.log(err);
}
}

start();
