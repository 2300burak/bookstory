const { config } = require("dotenv")
const express = require("express")

const app = express()
require("dotenv").config()
const connectDb = require("./models/connectDb")
const router = require("./routes/router")
connectDb()
app.use(express.json())
app.use("/api", router)

app.listen( process.env.PORT, () => {
console.log("hello burak")
} )

