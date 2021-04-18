const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const {validationResult } = require("express-validator")

exports.authRegister = async (req, res)=>{
    const {firstName, lastName, email, password} =req.body 
    
 
    const validationErr = validationResult(req)
    console.log("validationErr-->", validationErr)

    if(validationErr.errors.length >0){
        return res.status(400).json({ errors:validationErr.array() })
    }
    

    const userData = await User.findOne({email:email})
    console.log(userData)
    if (userData) {
        res.status(400).json({errors : [ {message:"user already exists"}]})
    }

    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password, salt)

    const user = new User ({
        firstName,
        lastName,
        email,
        password : newPassword
    })
    await user.save()


    res.send("register completed",firstName, lastName, email, password)
}


exports.authLogin = (req, res)=>{
    //TODO1: field validation
    //TODO2: user exist? 
    //TODO3: password compare
    //TODO4: authentication (TOKEN)
    res.send("login completed")
} 
