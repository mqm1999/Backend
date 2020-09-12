// authentication
const R = require('express').Router();
const authController = require('../auth/authController')

R.get('/login', authController.login);

module.exports = R