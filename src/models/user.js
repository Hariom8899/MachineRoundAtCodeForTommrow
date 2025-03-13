const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
      type:String,
      required:true,
      minLength:4,
      maxLength:20,
    },
    lastName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

const User = mongoose.model("User", userSchema);
module.exports = User
