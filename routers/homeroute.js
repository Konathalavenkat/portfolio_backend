const express=require("express")
const homeRouter=express.Router();
const contactschema=require('../schemas/contactschema');
const CertificateSchema = require("../schemas/certificateschema");
const ParticipationSchema=require("../schemas/pc");
const  mongoose  = require("mongoose");
homeRouter.get("/",(feq,res)=>{
    contactschema.find().then((data)=>(res.json(data))).catch((err)=>{console.log(err)});
})
homeRouter.post("/submit",(req,res)=>{
    contactschema.create(req.body).then((data)=>(res.json(data))).catch((err)=>{console.log(err)});
})
homeRouter.get("/Certificates",(req,res)=>{CertificateSchema.find().then((data)=>(res.json(data))).catch((err)=>console.log(err))});
homeRouter.get("/Participation",(req,res)=>{ParticipationSchema.find().then((data)=>(res.json(data))).catch((err)=>console.log(err))});
module.exports=homeRouter;
