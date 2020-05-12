const ejwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const JWTSecret = { secret: process.env.SECRET_KEY_JWT };

const iejwt = ejwt(JWTSecret);
const createJWT = (user) => {
  return jwt.sign(user, JWTSecret.secret, {
    expiresIn: "6h",
  });
};

module.exports = { iejwt, createJWT };
