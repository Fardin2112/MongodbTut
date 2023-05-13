const express=require("express");
const mongoose=require("mongoose");

const app=express()

const url =
    "mongodb+srv://admin:pass@cluster0.vklwrjd.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try {
      await mongoose.connect(url)
      console.log("connected");
      app.listen(4000,()=>{
        console.log("on port 4000!!");
      });
    } catch(err){
      console.log(error);
    }
}  

connect();

