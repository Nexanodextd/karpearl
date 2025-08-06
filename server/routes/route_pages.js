const express = require('express');
const router = express.Router();
 const controlpages = require('../controller/control_pages');

router.get('/',controlpages.home)
router.get('/about',controlpages.about)
router.get('/contact',controlpages.contact)



//ADMIN END //
router.get('/admin-home',controlpages.Admin_home);
router.get('/login',controlpages.Admin_login);

module.exports =router;