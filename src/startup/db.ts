import mongoose from "mongoose";
import config from "config";

export const connection = async () => {
  if (!config.has("DB_CONNECTION_URI")) {
    throw new Error("ERROR: Database connection string is not defined!");
  }

  const connection = await mongoose.connect(config.get("DB_CONNECTION_URI"));

  console.log("Connected to database");
  return connection;
};
