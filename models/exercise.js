import mongoose from 'mongoose';
const { Schema, Model } = mongoose;


const exerciseSchema = new Schema({
    username: String,
    description: String,
    duration: Number,
    date: Date
});

module.exports = Model("Exercise", exerciseSchema);