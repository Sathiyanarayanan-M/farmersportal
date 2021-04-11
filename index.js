import express from "express";
import userRouter from "./UserServices/routes/user.js";

const server = express();

server.listen(3000, () => {
  console.log("Server Running on port 3000");
});

server.get("/", (req, res) => {
  res.send("Server is up and running!");
});

server.use("/api/users", userRouter);
