const { config } = require("dotenv")
const express = require("express")

const app = express()
require("dotenv").config()
const connectDb = require("./models/connectDb")
const router = require("./routes/router")
connectDb()
app.use("/api", router)

app.listen( 5000, () => {
console.log("hello burak")
} )

