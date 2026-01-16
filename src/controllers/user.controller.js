const User = require("../models/user.model")

exports.create = async (req, res) => {
  const user = await User.create(req.body)
  return res.status(201).json(user)
}
