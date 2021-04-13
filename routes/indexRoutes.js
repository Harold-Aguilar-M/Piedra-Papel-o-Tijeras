const express = require('express');
const router = express.Router();

// Require controller modules.
const indexController = require('../controller/indexController');

router.get('/', indexController.index);

module.exports = router;