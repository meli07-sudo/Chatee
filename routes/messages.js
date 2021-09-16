const router = require("express").Router(),
  {
    getAllMsgS,
    getMsg,
    updateMsg,
    createMsg,
    deleteMsg,
  } = require("../controllers/messageController");

router.get("/", getAllMsgS);
router.post("/", createMsg);
router.get("/:_id", getMsg);
router.put("/:_id", updateMsg);
router.delete("/:_id", deleteMsg);

module.exports = router;
