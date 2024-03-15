import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.MONGO;

app.listen(port, (err) => {
  if (!err) {
    console.log("server connected!");
  }
});

mongoose.connect(url).then(() => {
  console.log("connected to db");
});
