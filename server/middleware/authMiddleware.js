const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Не авторизован" });
    }
    const decoder = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoder;
    next();
  } catch (error) {
    res.status(401).json({ message: "Не авторизован" });
  }
};
