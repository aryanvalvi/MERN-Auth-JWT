const express = require("express");
const { mongoose } = require("mongoose");
const dotenve = require("dotenv").config();
const app = express();
//db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("dabase is connected");
  })
  .catch((error) => {
    console.log("database is not Connected ", error);
  });

app.use(express.json());

app.use("/", require("./Routes/Auth"));

//Listening
const Port = 7000;
app.listen(Port, () => {
  console.log("Server is runnign on Port", Port);
});
