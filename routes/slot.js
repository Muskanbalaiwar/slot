const express = require('express');

const adminController = require('../controller/slot');

const router = express.Router();

router.post('/Slot',adminController.postData)

module.exports=router;