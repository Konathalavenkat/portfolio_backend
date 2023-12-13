const mongoose =require("mongoose");

const contactschema=new mongoose.Schema({
    "name":String,
    "email":String,
    "msg":String
},{collection:"contacts"});
module.exports=mongoose.model("Contactschema",contactschema)
