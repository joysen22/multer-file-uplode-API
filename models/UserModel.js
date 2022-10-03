const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name must be required."],
    lowercase: true,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
