const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName:{
        type : String,
        require : false
    },
    email:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    registerDate:{
        type :Date ,
        require : Date.now
    }
})
const User = mongoose.model("user", UserSchema)
module.exports = User 
//module.exports = User = mongoose.model("user", UserSchema)  böylede kullanılabilir