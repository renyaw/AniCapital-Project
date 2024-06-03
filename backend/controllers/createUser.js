import User from "../models/UserModel";

// Create User
const createUser = async (req, res) => {
  const { username, nama, password, role } = req.body;
  try {
    const user = await User.create({ username, nama, password, role });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
