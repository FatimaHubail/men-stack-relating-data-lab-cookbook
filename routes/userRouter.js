const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

const router = express.Router();

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);

module.exports = router;