const router = require("express").Router();
const { signIn, signUp } = require("../controllers/authController");

router.post("/api/signin", signIn);
router.post("/api/signup", signUp);

module.exports = router;
