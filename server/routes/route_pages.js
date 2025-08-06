const express = require('express');
const router = express.Router();
 const controlpages = require('../controller/control_pages');

router.get('/',controlpages.home)
router.get('/about',controlpages.about)
router.get('/contact',controlpages.contact)

module.exports =router;