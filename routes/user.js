const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:_id", getUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;
