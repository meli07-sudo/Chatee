const { model, Schema } = require("mongoose"),
  { isEmail } = require("validator"),
  bcrypt = require("bcrypt");

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    validator: isEmail,
    minLength: 2,
    maxLength: 30,
  },
  password: {
    type: String,
    maxLength: 1024,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.statics.signIn = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    let auth = await bcrypt.compare(password, user.password);
    return auth ? user : auth;
  } else return -1;
};
UserSchema.statics.signUp = async function (username, password) {
  let user = await this.findOne({ username });
  if (user) return false;
  else {
    return await this.create({ username, password });
  }
};
UserSchema.statics.getUser = async function (_id) {
  let user = await this.findOne({ _id }).select("_id username");
  return user ? user : false;
};
UserSchema.statics.getAllUsers = async function () {
  const users = await this.find().select("_id username");
  return {
    count: users.length,
    users,
  };
};
const UserModel = model("user", UserSchema);

module.exports = UserModel;
