//jshint esversion:6
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
// import React from "react";
// import ReactDOM from "react-dom";
import cors from "cors";
import studentRoutes from "./routes/student";


const app= express();
//now student loll no name etc all will start from this route
app.use("/students", studentRoutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(bodyParser.useUnifiedTopology({limit: "20mb", extended:true}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dashboard", {useNewUrlParser: true});























// const CONNECTION_URL= 'mongodb://mukul_op:maakichu@cluster0-shard-00-00.938yf.mongodb.net:27017,cluster0-shard-00-01.938yf.mongodb.net:27017,cluster0-shard-00-02.938yf.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-78llbj-shard-0&authSource=admin&retryWrites=true&w=majority';
//
// const PORT =process.env.PORT || 5000;
// mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}
// ).then(() => app.listen(PORT,() =>
//     console.log("connected:${PORT}")
//     )).catch((err)=>console.log(err.message));
//
//     mongoose.set('useFindAndModify', false);
