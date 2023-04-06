import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

const User = mongoose.model("User", userSchema, "User");

export default User;
