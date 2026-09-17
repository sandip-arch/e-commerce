const jwt= require('jsonwebtoken');
const User = require('../models/userModel');
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt_token;
if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userName);
      next();
    } catch (err) {
      res.status(400).send('Invalid token.');
    }
  }}

module.exports = authMiddleware;

