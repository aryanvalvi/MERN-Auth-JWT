const mongoose = require("mongoose");
const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const People = mongoose.model("PeopleLogin", PeopleSchema);
module.exports = People;
