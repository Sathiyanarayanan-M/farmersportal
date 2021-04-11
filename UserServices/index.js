import express from "express";
import userRouter from "./routes/user.js";

const server = express();

server.listen(4000, () => {
  console.log("Server Running on port 4000");
});

server.get("/", (req, res) => {
  res.send("Server is up and running inside UserService!");
});

server.use("/api/users", userRouter);
