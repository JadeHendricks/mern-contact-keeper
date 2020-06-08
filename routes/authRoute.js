const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const auth = require('../middleware/auth');
dotenv.config();
const User = require('../models/User');

//Get logged in user
//private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({
      user
    })
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Log in user
//public
router.post('/', [ 
  check('email', 'Please include a valid email').isEmail(), 
  check('password', 'Please enter a password with 6 or more character').exists()
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'Invalid Credentials'
      });
    } 

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: 'Invalid Credentials'
      });
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600
    }, (err, token) => {
      if (err) throw err;
      res.json({
        token
      })
    });

  } catch (err) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }

});

module.exports = router;
