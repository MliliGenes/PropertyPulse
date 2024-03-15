import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());
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

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal problem";
  return res
    .status(statusCode)
    .json({ success: false, statusCode: statusCode, message: message });
});
