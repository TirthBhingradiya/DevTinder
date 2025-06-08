const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tirth:tirth03@cluster0.htfnhnp.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
