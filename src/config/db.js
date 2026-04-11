const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Support both MONGODB_URI and DB_HOST configuration methods
    let mongoURI = process.env.MONGODB_URI;

    if (!mongoURI && process.env.DB_HOST) {
      // Build URI from individual components
      const dbHost = process.env.DB_HOST || "localhost";
      const dbPort = process.env.DB_PORT || 27017;
      const dbName = process.env.DB_NAME || "blogify";
      const dbUsername = process.env.DB_USERNAME;
      const dbPassword = process.env.DB_PASSWORD;
      
      if (dbUsername && dbPassword) {
        mongoURI = `mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;
      } else {
        mongoURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;
      }
    }

    if (!mongoURI) {
      throw new Error("No MongoDB URI provided. Set MONGODB_URI or DB_HOST environment variable.");
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;