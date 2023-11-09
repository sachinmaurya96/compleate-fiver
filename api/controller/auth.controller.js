import User from "../models/user.model.js"
import bcrypt from "bcrypt";
export const register = async (req ,res)=>{
    try{
        console.log(req.body)
        const hash = bcrypt.hashSync(req.body.password,5)

        const newUser = new User({
            password:hash,
            ...req.body,
        })
        await newUser.save()
        res.status(201).send("user has been created",)
    }catch(err){
        res.status(500).send("somethign went wrong",err)
    }
}

export const login = async (req,res)=>{
    try{

    }catch(err){
        res.status(500).send("somethign went wrong",err)
    }
}

export const logout =async  (req,res)=>{
    try{

    }catch(err){
        res.status(500).send("somethign went wrong")
    }
}