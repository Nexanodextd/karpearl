const express = require('express');
const router = express.Router();
const api_controller = require('../controller/api_controller.')

router.post('/register_admin',api_controller.register_admin);
router.post('/admin_login',api_controller.login);
router.post('/events_upload',api_controller.eventUplaod);

module.exports = router;