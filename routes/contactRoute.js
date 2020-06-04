const express = require('express');
const router = express.Router();

//get all users contacts
//private
router.get('/', (req, res) => {
  res.send('Get all users contacts');
});

//add new contact
//private
router.post('/', (req, res) => {
  res.send('Add contact');
});

//update contact
//private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

//delete contact
//private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
