// mongodb+srv://Burak:<password>@cluster0.0jjt4.mongodb.net/test
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
         })
        console.log("db successfully connected") 
    } catch (err) {
        console.log("hata mesajı",err)
    }

    
}
module.exports = connectDB