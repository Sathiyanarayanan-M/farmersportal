import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.URI);
    const conn = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
