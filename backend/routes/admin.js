const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-stock', adminController.getAddStock);

router.post('/add-stock', adminController.postStock);

router.get('/:stockId', adminController.getStock);

router.post('/delete', adminController.postDelete);

module.exports = router;


