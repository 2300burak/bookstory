const express = require("express")

const router = express.Router()

const AuthController = require("../controllers/AuthController")


router.post("/", AuthController.authRegister)


router.post("/login",AuthController.authLogin)


module.exports = router