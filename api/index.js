const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');

//bcrypting password

const salt = bcrypt.genSaltSync(10);
const secret = 'asjjdbjsbdbdbhjbdhjbddefde';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  'mongodb+srv://224abhishekjha:2avjo5lNMn4RsOuD@cluster0.a7ctdui.mongodb.net/?retryWrites=true&w=majority'
);

//Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

//Login

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.listen(4300);

//2avjo5lNMn4RsOuD

//mongodb+srv://224abhishekjha:2avjo5lNMn4RsOuD@cluster0.a7ctdui.mongodb.net/?retryWrites=true&w=majority
