const express = require("express");
const router =express.Router();
const authController = require("../controllers/authController.js");


router.post("/singup",authController.register);
router.post("/singin",authController.login);



module.exports = router;