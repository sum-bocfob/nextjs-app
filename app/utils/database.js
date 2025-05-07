import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yuritaso0204:v5SyNYM6WQU173BO@cluster0.igurafh.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Success: Connected to MongoDB");
    } catch {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
};

export default connectDB;
