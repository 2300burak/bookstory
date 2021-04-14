exports.authRegister = (req, res)=>{
    const {firstName, lastName, email, password} =req.body 
    console.log("fields :",firstName, lastName, email, password)

    res.send("register completed",firstName, lastName, email, password)
}
exports.authLogin = (req, res)=>{
    res.send("login completed")
} 
