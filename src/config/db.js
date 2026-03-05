const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        console.log("Mongo URI:", uri); // debug

        await mongoose.connect(uri);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Database connection failed", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;