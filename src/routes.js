const express = require('express');
const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const aboutController = require('./controllers/homeController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.about);
router.use('/cube', createController);

module.exports = router;

