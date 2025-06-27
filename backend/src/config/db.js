import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected successfully!");
  } catch (error) {
    console.log("error while connecting database!", error);
    process.exit(1);
  }
};
