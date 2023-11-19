// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import DBconnect from "./db/index.js"



dotenv.config({
    path: './env'
})

DBconnect();
















//1st aproach
/*import express from "express";
const app=express();

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_Name}`)
        //listener
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`The application is listening on port: ${process.env.PORT}`)
        })

    }catch(error){
        console.log(error);
        throw error;
    }
})()*/