const connectDB = require("./db/connect");
const Product = require("./models/product");
require('dotenv').config();

const ProductJson = require("./products.json")


const start = async () => {
    try{
       await connectDB(process.env.MONGODB_URL);
       await Product.deleteMany();
       await Product.create(ProductJson);
       console.log("Success");
    }
    catch(err){
        console.log(err);
    }
}

start();
