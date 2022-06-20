const mongoose=require("mongoose")
const mongoURI="mongodb://localhost:27017/product"
const connectToMongo=()=>{
  mongoose.connect(mongoURI,()=>{
    console.log("connected to mongo sucessfull")
  })
}
module.exports=connectToMongo;