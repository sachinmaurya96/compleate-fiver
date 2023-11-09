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

const app = express()
dotenv.config()
mongoose.set("strictQuery", true)
app.use(express.json())

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

app.listen(8080,()=>{
    connetc()
    console.log("backend server is running");
})
