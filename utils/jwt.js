const jwt = require("jsonwebtoken");
require("dotenv").config("../.env");
module.exports.createJwtToken = async (userInfo, maxAge = 3 * 24 * 60 * 60 * 1000) => {
  const { _id, username } = userInfo;
  return await jwt.sign({ _id, username }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};
