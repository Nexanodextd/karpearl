const express = require('express');
const router = express.Router();
const api_controller = require('../controller/api_controller.');

router.post('/register_admin',api_controller.register_admin);
router.post('/admin_login',api_controller.login);
router.post('/volunteer',api_controller.volunteer);
router.post('/events_upload',api_controller.eventUplaod);
router.post('/newsletter',api_controller.newsletter);
router.post('/post_numbers',api_controller.post_numbers);
router.post('/contact',api_controller.contact);
router.post('/donation',api_controller.donation);
module.exports = router;