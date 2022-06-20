const mongoose=require("mongoose")

const productschema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    brand:{
        type:String
    }
})

const Product=mongoose.model("product",productschema);
module.exports=Product;