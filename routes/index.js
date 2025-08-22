var express = require('express');
var router = express.Router();
var ctrlMain = require('../app_server/controllers/main');

router.get('/', ctrlMain.home);
router.get('/menu', ctrlMain.menu);
router.get('/order-status', ctrlMain.orderStatus);
router.get('/login', ctrlMain.login);

module.exports = router;
