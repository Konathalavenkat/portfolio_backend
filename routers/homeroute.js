const express=require("express")
const homeRouter=express.Router();
const contactschema=require('../schemas/contactschema');
const  mongoose  = require("mongoose");
homeRouter.get("/",(req,res)=>{
    contactschema.find().then((data)=>(res.json(data))).catch((err)=>{console.log(err)});
})
homeRouter.post("/submit",(req,res)=>{
    contactschema.create(req.body).then((data)=>(res.json(data))).catch((err)=>{console.log(err)});
})
module.exports=homeRouter;
