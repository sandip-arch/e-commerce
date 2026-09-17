const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./router/userRoutes');
connectDB = require('./config/db');
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/',userRoutes);


app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
