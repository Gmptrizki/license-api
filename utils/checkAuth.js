module.exports = function (req, res, next) {
  const token = req.headers['x-api-key'];
  if (token === process.env.API_KEY) {
    next();
  } else {
    return res.status(403).json({ message: 'Unauthorized' });
  }
};
