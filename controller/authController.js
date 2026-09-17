
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const authRegister = async (req, res) => {
  const { userName, email, phone, password, address, nearestLandmark, gender, pinCode } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    email,
    phone,
    password: hashedPassword,
    address,
    nearestLandmark,
    gender,
    pinCode
  });
try{
  await newUser.save();
 res.status(201).render('login', { message: 'User registered successfully', user: newUser });
}catch(err){
    console.log(err);
    res.status(500).render('users', { error: 'Error registering user' });
    return;
  }
 
}


const loginUser =async(req, res) => {
  const { email, password } = req.body;
const user = await User.findOne({ email });
console.table(user);
  if (user.email && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id ,username: user.userName}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt_token', token, { httpOnly: true });
    res.redirect('/user');
  } else {
    res.status(401).send('Invalid username or password');
  }

}

module.exports = { authRegister, loginUser };