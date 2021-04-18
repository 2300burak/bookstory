const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const {validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")

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


exports.authLogin = async (req, res)=>{
    const {email, password} =req.body
    
    //TODO2: user exist? 
    const userData = await User.findOne({email})
    console.log("userdata-->",userData)
    if (!userData) {
        res.status(400).json({errors : [ {message:"user dosen't exists"}]})
    }
    
    
    //TODO1: field validation
    const validationErr = validationResult(req)

    if(validationErr.errors.length >0){
        return res.status(400).json({ errors:validationErr.array() })
    }
    //TODO3: password compare
    const isPasswordMatch = await bcrypt.compare(password, userData.password)
    if(!isPasswordMatch){
        res.send("wrong password")
    }
    //TODO4: authentication (TOKEN)
   jwt.sign({userData}, process.env.SECRET_KEY, {expiresIn: 3600 },(err, token) => {
       if(!err){
        return res.status(400).json({ errors:[{message: "Unknown Error "}]})
    }
    res.send(token)
    } )
    

} 
