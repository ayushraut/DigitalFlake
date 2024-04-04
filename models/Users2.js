const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  name: String,
  ps: String,
  cate: String,
  mrp: String,
  img: String,
  stat: String,
});

const UserModel2 = mongoose.model("users2", UserSchema);
module.exports = UserModel2;
