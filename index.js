const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const homeRouter=require("./routers/homeroute");
mongoose.connect("mongodb+srv://venkatsivaff:chopper@cluster0.oifaswj.mongodb.net/portfolio")
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));
app.use("/home",homeRouter);
app.listen(4000,(req,res)=>{
    console.log("server started at 4000");
}) 