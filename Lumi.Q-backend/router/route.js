
const express = require("express");
const router = express.Router();

const controller = require('../controllers/appController.js');

router.route('/login').post(controller.login);

module.exports = router;