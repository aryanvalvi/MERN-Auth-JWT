const People = require("../Models/user");
const bcrypt = require("bcrypt");

const Basic = (req, res) => {
  return res.json({
    Message: "hello",
  });
};

const Create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 13);

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
      password: hash,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await People.findOne({ email });
  if (!user) {
    return res.json({
      error: "Gandu email",
    });
  }
  const hash = user.password;
  const isValid = await bcrypt.compare(password, hash);
  if (!isValid) {
    return res.json({
      error: "gandu Password",
    });
  }
  return res.json({
    Message: "login Successafjcn",
  });
};

module.exports = { Basic, Create, login };
