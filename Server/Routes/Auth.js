const express = require("express");
const routes = express.Router();
const { Basic, Create } = require("../controller/ControlRoute");
const cors = require("cors");

routes.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

//get the Infor
routes.get("/", Basic);
routes.post("/Create", Create);

module.exports = routes;
