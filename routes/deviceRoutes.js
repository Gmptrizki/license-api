const express = require('express');
const router = express.Router();
const controller = require('../controllers/deviceController');
const checkAuth = require('../utils/checkAuth');

router.post('/register', checkAuth, controller.registerDevice);
router.post('/check', controller.checkLicense);
router.post('/deactivate', checkAuth, controller.deactivateDevice);

module.exports = router;
