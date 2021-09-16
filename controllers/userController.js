const UserModel = require("../models/User");
const { isValid } = require("mongoose").Types.ObjectId;

const getUser = async (req, res) => {
  const { _id } = req.params;
  if (isValid(_id)) {
    try {
      const user = await UserModel.getUser(_id);
      if (!user) res.status(404).send(`User with ID ${_id} not found`);
      else res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send("Invalid ID");
  }
};

const getAllUsers = async (req, res) => {
  try {
    res.status(200).json(await UserModel.getAllUsers());
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { _id } = req.params;
  if (isValid(_id)) {
    try {
      const user = await UserModel.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      if (user) res.status(200).json(user);
      else res.status(400).send(`${_id} not found`);
    } catch (error) {}
  } else {
    res.status(400).send("Invalid ID");
  }
};
const deleteUser = async (req, res) => {
  const { _id } = req.params;
  if (isValid(_id)) {
    const user = await UserModel.findByIdAndDelete(_id);
    if (user) res.status(200).send(`${_id} was deleted`);
    else res.status(400).send(`${_id} not found`);
  } else {
    res.status(400).send("Invalid ID");
  }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
