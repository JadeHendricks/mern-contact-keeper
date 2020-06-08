const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  try {
    //if all is well, the payload will be added to decoded
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //req.user is set here so that we can get access to the user id it in the route
    req.user = decoded.user;
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid'
    });
  }

  next();
}