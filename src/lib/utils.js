import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI env variable .env")
}

let cached = global.mongoose

if(!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

export const connectToDb = async () => {
    if(cached.conn) {
        console.log("Using existing connection")
        return cached.conn
    }
    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
        
    }
    try {
        
        cached.conn = await cached.promise
    } catch (err) {
        console.log(err)
        cached.promise = null
        throw new Error(err)
    }

    return cached.conn;
}