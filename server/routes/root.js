const express = require("express");
const dishes = require("./api/dishes")

const app = express.Router();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Dishes API" })
})

app.use("/api/dishes", dishes);

module.exports = app;