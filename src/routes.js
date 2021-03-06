const express = require('express');
const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');

const router = express.Router();

router.use('/', homeController);
router.use('/cube', createController);

module.exports = router;

