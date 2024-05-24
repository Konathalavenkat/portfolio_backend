const mongoose=require('mongoose');

const certificateschema=new mongoose.Schema(
    {id:String,name:String,link:String},{collection:"certificate"}
);
module.exports=mongoose.model("CertificateSchema",certificateschema);