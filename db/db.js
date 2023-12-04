import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`mongodb connected: ${connect.connection.host}`)
    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
};
