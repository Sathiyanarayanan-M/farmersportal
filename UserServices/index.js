import express from "express";
import userRouter from "./routes/user.js";
import { connectDB } from "../config/dbconfig.js";
import dotenv from "dotenv";

dotenv.config({ path: "../config/config.env" });
const server = express();

// connect to mongodb atlas
connectDB();

server.use(express.json());

server.listen(3000, () => {
  console.log("Server Running on port 3000");
});

server.get("/", (req, res) => {
  res.send("Server is up and running inside UserService!");
});

server.use("/api/users", userRouter);
