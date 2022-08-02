import mongoose from 'mongoose';
const { Schema, Model } = mongoose;


const userSchema = new Schema({
    username: String
});

module.exports = Model("User", userSchema);