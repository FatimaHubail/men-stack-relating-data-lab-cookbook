const express = require('express');
const recipesCtrl = require('../controllers/recipesCtrl');

const router = express.Router({mergeParams: true});

// routes
router.get('', recipesCtrl .index);
router.get('/new', recipesCtrl.newRecipe);
router.post('/new', recipesCtrl.create);
router.get('/:recipeId', recipesCtrl.show);
router.get('/:recipeId/edit', recipesCtrl.edit);
router.put('/:recipeId', recipesCtrl.update);
router.delete('/:recipeId', recipesCtrl.deleteRecipe);


module.exports = router;