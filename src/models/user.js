const mongoose = require("mongoose");
const { type } = require("os");
const { validate } = require("webpack");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    lowerCase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender data is not valid")
      }
    }
  },
  skills:{
    type:[String];
  }
});

module.exports = mongoose.model("User", userSchema);
