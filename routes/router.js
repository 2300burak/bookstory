const express = require("express")

const router = express.Router()
const AuthRouter = require("./AuthRouter")


router.use("/auth", AuthRouter)

// router.use("/profile", ProfileRouter)

// router.use("/book", BookRouter)









module.exports = router