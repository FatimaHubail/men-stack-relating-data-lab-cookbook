const express = require('express');
const ingredientsCtrl = require('../controllers/ingredientsCtrl');

const router = express.Router();

// routes
router.get('', ingredientsCtrl.index);
router.post('', ingredientsCtrl.create);

module.exports = router;
