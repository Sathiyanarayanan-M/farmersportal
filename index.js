import express from "express";
import Mongo from "mongodb";
import userRouter from "./UserServices/routes/user.js";
import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://harishsambasivam:QdSTUvlClth4pKkS@cluster0.vyhlj.mongodb.net/sample_mflix",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

// const MongoClient = Mongo.MongoClient;
const server = express();

// // Connection URL
// const url =
//   "mongodb+srv://harishsambasivam:QdSTUvlClth4pKkS@cluster0.vyhlj.mongodb.net/sample_mflix";

// const dbName = "sample_mflix";
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function (err) {
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
// });

server.listen(3000, () => {
  console.log("Server Running on port 3000");
});

server.get("/", (req, res) => {
  res.send("Server is up and running!");
});

server.use("/api/users", userRouter);
