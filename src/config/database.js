const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/devTinder2");
};
module.exports = connectDB;
