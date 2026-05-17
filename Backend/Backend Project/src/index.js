import dotenv, { configDotenv } from "dotenv";
import connectDB from "./db/dbconnection.js";
import {app} from "./app.js";

dotenv.config({
    path:"./.env"
});


connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 6000 ,()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
    });
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
});


// 2nd way of connecting db within index,js instead of separate file

/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        });
    } 
    catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})(); */