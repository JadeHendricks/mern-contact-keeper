const express = require('express');
const router = express.Router();

//Get logged in user
//private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//Login user
//private
router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
