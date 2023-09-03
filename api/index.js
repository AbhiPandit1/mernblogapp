const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const jwt =require('jsonwebtoken')

const app = express();
const mongoose = require('mongoose');

//bcrypting password

const salt = bcrypt.genSaltSync(10);
const secret='asjjdbjsbdbdbhjbdhjbddefde'

app.use(cors());
app.use(express.json());

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
    res.status(400).json(e);
  }
});

//Login


app.post('/login',async (req,res)=>{
    const {username,password}=req.body;

    const userDoc= await User.findOne({username})
    const passok=bcrypt.compareSync(password,userDoc.password)
    res.json(passok)

    if (passok){
        //logged in
        

        jwt.sign({username,id:userDoc.id},secret,{},(error)=>{
            if (error) throw error;
            res.json(token)

        })





        //res.json()
    }
    else{
        res.status(400).json('wrong credential')
    }

})






app.listen(4300)

//2avjo5lNMn4RsOuD

//mongodb+srv://224abhishekjha:2avjo5lNMn4RsOuD@cluster0.a7ctdui.mongodb.net/?retryWrites=true&w=majority
