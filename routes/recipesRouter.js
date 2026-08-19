const express = require('express');
const recipesCtrl = require('../controllers/recipesCtrl');

const router = express.Router({mergeParams: true});

// routes
router.get('', recipesCtrl .index);
router.get('/new', recipesCtrl.newRecipe);
router.post('/new', recipesCtrl.create);
router.get('/:itemId', recipesCtrl.show);
router.get('/:itemId/edit', recipesCtrl.edit);
router.put('/:itemId', recipesCtrl.update);
router.delete('/:itemId', recipesCtrl.deleteItem);


module.exports = router;