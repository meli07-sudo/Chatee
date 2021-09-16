const UserModel = require("../models/User");
const { createJwtToken } = require("../utils/jwt");
const signIn = async (req, res) => {
  let { username, password } = req.body;
  let authUser = await UserModel.signIn(username, password);
  if (authUser === -1) res.status(404).send("user not founded");
  else
    authUser
      ? res.status(200).json({ userToken: await createJwtToken(authUser) })
      : res.status(200).send("incorrect password");
};
const signUp = async (req, res) => {
  let { username, password, cpassword } = req.body;
  if (password != cpassword)
    res.status(400).send("password and password confirmation must be same");
  else if (password.length <= 5)
    res.status(400).send("password minlength is 5");
  else {
    let newUser = await UserModel.signUp(username, password);
    if (!newUser) res.status(400).send("username already taken");
    else res.status(200).json({ userToken: await createJwtToken(newUser) });
  }
};
const logout = async (req, res) => {};
module.exports = { signIn, signUp, logout };
