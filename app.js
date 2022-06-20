const express= require ("express");
const connectToMongo=require("./db")
const cors=require("cors")
const port=process.env.port || 5000;
const app=express();

const ProductRoute=require("./routes/productroute")
 connectToMongo();

app.use(express.json());
app.use(cors())
app.use("/api/product",ProductRoute)


app.listen(port,()=>{
  console.log("server is running at port"+port)
})