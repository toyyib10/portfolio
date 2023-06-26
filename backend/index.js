const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const port = process.env.PORT;

require("dotenv").config()
app.use(cors())
app.use(express.urlencoded({ extended: true, limit: "100mb"}))
app.use(express.json({limit:"100mb"}))

app.get("/", (req, res) => {
  
})

app.listen(port, (err) => {
  if (err) {
    console.log("Server unable to start")
  } else {
    console.log("Server started")
  }
})