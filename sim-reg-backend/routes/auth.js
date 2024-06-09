const express = require("express");
const router = express.Router();
const {
  createUserController,
  loginUserController,
  getAddress,
} = require("../controllers/userController");

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/getAddress", getAddress);

module.exports = router;
