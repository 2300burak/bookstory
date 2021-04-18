const express = require("express")

const {check, validationResult} = require("express-validator")
// validationResult check ile req içine yazdırılan kontrol objesini bulup döndürür.
const check1 = check(
    "password", 
    "Please enter a password with 6 and more chars").isLength({min:6})

const check2 = check(
    "email",
    "Please enter correct email format " ).isEmail()


const router = express.Router()

const AuthController = require("../controllers/AuthController")


router.post("/register",
check1,
check2,
 AuthController.authRegister)


router.post("/login",
check1,
check2,
AuthController.authLogin)


module.exports = router