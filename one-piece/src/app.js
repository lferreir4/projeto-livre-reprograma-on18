require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tsunnyRoutes = require("./routes/tsunnyRoutes");
const db = require("../src/config/mongoConnect");
const indexRouter = require("./routes/indexRoutes");

const app = express();

app.use(express.json());
app.use(cors());
db.connect();

app.use(indexRouter);

app.use("/pirates", tsunnyRoutes);

module.exports = app;
