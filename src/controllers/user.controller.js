import { User } from "./src/models/user.model.js";


exports.create = async (req, res) => {
  const user = await User.create(req.body)
  return res.status(201).json(user)
}
