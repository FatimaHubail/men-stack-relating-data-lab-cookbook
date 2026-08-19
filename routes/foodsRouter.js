const express = require('express');
const foodsCtrl = require('../controllers/foodsCtrl');

const router = express.Router({mergeParams: true});

// routes
router.get('', foodsCtrl.index);
router.get('/new', foodsCtrl.newFood);
router.post('/new', foodsCtrl.create);
router.get('/:itemId', foodsCtrl.show);
router.get('/:itemId/edit', foodsCtrl.edit);
router.put('/:itemId', foodsCtrl.update);
router.delete('/:itemId', foodsCtrl.deleteItem);


module.exports = router;