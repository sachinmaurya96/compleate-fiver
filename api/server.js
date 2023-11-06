import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
dotenv.config()
mongoose.set("strictQuery", true)

const connetc = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("database connect")
    }catch(err){
        console.log(err)
    }
}

app.listen(8080,()=>{
    connetc()
    console.log("backend server is running");
})
