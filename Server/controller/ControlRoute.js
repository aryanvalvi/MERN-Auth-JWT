const People = require("../Models/user");

const Basic = (req, res) => {
  return res.json({
    Message: "hello",
  });
};

const Create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check If the Name is there Or not
    if (!name) {
      return res.json({
        error: "Please enter a name",
      });
    }
    //check the password is Right or not
    if (!password || password.length < 6) {
      return res.json({
        error: "Please entered Proper Message and At least Write 6 Character",
      });
    }
    //Check Is there is already email or not

    const Checks = await People.findOne({ email: email });
    if (Checks) {
      res.json({ error: "There is Already a Email" });
    }
    const user = await People.create({
      name,
      email,
      password,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Basic, Create };
