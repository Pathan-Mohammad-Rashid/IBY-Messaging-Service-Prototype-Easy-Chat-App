const jwt = require('jsonwebtoken');
const secret = 'e916117b854c93382f323af3a9130d8af043ac48bee5c0c245feff0b9cf5c93c28e1783b0f6776e38af75928baf4598ab28999c0cc4f38bbf0a1a0933d27c8d6';

const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, secret, {
    expiresIn: '1h',
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).send('Token required');

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(401).send('Invalid token');
    req.user = user;
    next();
  });
};

module.exports = { generateToken, verifyToken };
