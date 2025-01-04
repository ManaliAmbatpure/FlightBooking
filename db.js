const mongoose = require("mongoose");

// MongoDB connection string
const MONGO_URI = "mongodb://127.0.0.1:27017/flight_booking";

// Connect to MongoDB
const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

// Export the connection function
module.exports = connectDB;