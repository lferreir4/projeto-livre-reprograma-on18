require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tsunnyRoutes = require("./routes/tsunnyRoutes");
const db = require("../src/config/mongoConnect");

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

app.use("/pirates", tsunnyRoutes);

module.exports = app;
