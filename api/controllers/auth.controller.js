import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  let { username, password, email } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  let newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user created");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
