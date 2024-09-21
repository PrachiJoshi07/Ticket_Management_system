// config/index.js
require('dotenv').config();

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGO: process.env.MONGODB_URL,
};
