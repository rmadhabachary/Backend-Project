import mongoose from "mongoose";
import {DB_Name} from "../constants.js";

const DBconnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(`\n mongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Connection FAILED: ", error);
    process.exit(1);
  }
};

export default DBconnect;