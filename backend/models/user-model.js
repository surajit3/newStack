const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: [true, "Please Enter Full-Name"],
    trim: true,
  },
  email: { type: String, require: [true, "Please Enter Email"], unique: true },
  password: {
    type: String,
    require: [true, "Please Enter Password"],
    minLength: [8, "Password must be more than 8 characters"],
  },
  terms_conditions: {
    type: Boolean,
    require: [true, "Please Read and Tick Terms and Conditions"],
  },
});


module.exports = mongoose.model('user', userSchema);