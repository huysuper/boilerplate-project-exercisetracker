import mongoose from 'mongoose';
const { Schema, Model } = mongoose;


const logObjSchema = new Schema({
    description: String,
    duration: Number,
    date: Date
});

const logSchema = new Schema({
    username: String,
    count: Number,
    log: [logObjSchema]
});

module.exports = Model("Log", logSchema);