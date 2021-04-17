import mongo from "mongodb";
const databaseName = "farmersportal";
import dotenv from "dotenv";
dotenv.config({ path: "../config/config.env" });
const connectionURL = process.env.URI;

const client = new mongo.MongoClient(connectionURL, { useNewUrlParser: true });

export const connectDB = async () => {
  try {
    await client.connect();
    const db = client.db(databaseName);
    console.log("connected to mongodb atlas successfully");
    return db;
  } catch (err) {
    console.log("error making connection!");
  }
};
