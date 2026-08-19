const { render } = require('ejs');
const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
const Ingredient = require('../models/ingredient.js');

// index route
const index = async (req, res) => {
    try {
        const recipes = await Recipe.find({ owner: req.params.id });
        res.render('recipes/index.ejs', { recipes });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

// route to render the 'add item' form 
const newRecipe = async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.render('recipes/new.ejs', { userId: req.params.id , ingredients });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}

// route to add item to pantry
const create = async (req, res) => {
    try {
        req.body.owner = req.params.id;
        if (req.body.ingredients && !Array.isArray(req.body.ingredients)) {
            req.body.ingredients = [req.body.ingredients];
        }
        await Recipe.create(req.body);
        res.redirect(`/users/${req.params.id}/recipes`);
    } catch (error) {
        console.log(error);
        res.redirect(`/users/${req.params.id}/recipes/new`);
    }
}

// route to display pantry items
const show = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId).populate('ingredients');
        res.render('recipes/show.ejs', { recipe, userId: req.params.id });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}

// route to show the edit page
const edit = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        const ingredients = await Ingredient.find({});
        res.render('recipes/edit.ejs', { recipe, userId: req.params.id, ingredients });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

// update route
const update = async (req, res) => {
    try {
        if (req.body.ingredients && !Array.isArray(req.body.ingredients)) {
            req.body.ingredients = [req.body.ingredients];
        } else if (!req.body.ingredients) {
            req.body.ingredients = [];
        }
        await Recipe.findByIdAndUpdate(req.params.recipeId, req.body, { new: true });
        res.redirect(`/users/${req.params.id}/recipes`);

    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}

// Delete item route
const deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.recipeId);
        res.redirect(`/users/${req.params.id}/recipes`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}


module.exports = {
    index,
    newRecipe,
    create,
    show,
    deleteRecipe,
    edit,
    update,
};