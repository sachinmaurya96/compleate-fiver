import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import ConversationRoute from "./routes/conversation.route.js"
import gigRoute from "./routes/gig.route.js"
import messageRoute from "./routes/message.route.js"
import orderRoute from "./routes/order.route.js"
import reviewRoute from "./routes/review.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()
dotenv.config()
mongoose.set("strictQuery", true)
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173",credentials:true}))


const connetc = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("database connect")
    }catch(err){
        console.log(err)
    }
}

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/gigs",gigRoute)
app.use("/api/orders",orderRoute)
app.use("/api/conversation",ConversationRoute)
app.use("/api/messages",messageRoute)
app.use("/api/reviews",reviewRoute)
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).send(errorMessage)
})
app.use("/",(req,res)=>{
    res.send("running")
})
app.listen(8080,()=>{
    connetc()
    console.log("backend server is running");
})
