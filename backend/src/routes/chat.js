const express = require('express');
const { verifyToken } = require('../auth/jwt');
const router = express.Router();

router.post('/send', verifyToken, (req, res) => {
  // Logic for sending a chat message
  res.send({ message: 'Message sent' });
});

router.get('/receive', verifyToken, (req, res) => {
  // Logic for receiving messages
  res.send({ messages: ['Example message 1', 'Example message 2'] });
});

module.exports = router;
