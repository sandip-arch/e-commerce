const express = require('express');
const router= express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const { authRegister, loginUser } = require('../controller/authController');
router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/user', authMiddleware, (req, res) => {
  res.render('users');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/register', authRegister);

router.post('/login', loginUser);

module.exports = router;