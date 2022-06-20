const express=require("express");
const router=express.Router();
const ProductModal=require("../model/Productmodel")

router.post('/post', async (req,res)=>{
    try{
        let product =await ProductModal.insertMany(req.body)
        res.status(200).json({sucess:true, product})
    }catch{
        console.log(error)
        res.status(500).json({messege:"internal server error"})
    }
})


router.get('/get', async (req,res)=>{
    try{
        let product =await ProductModal.find()
        res.status(200).json({sucess:true, product})
    }catch{
        console.log(error)
        res.status(500).json({messege:"internal server error"})
    }
})


module.exports=router;