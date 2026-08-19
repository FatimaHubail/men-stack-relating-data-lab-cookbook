const { render } = require('ejs');
const Ingredient = require('../models/ingredient.js');

// index route to list all ingredients and show the add form on the same page
const index = async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.render('ingredients/index.ejs', { ingredients });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

// route to add ingredient
const create = async (req, res) => {
    try {
        const existingIngredient = await Ingredient.findOne({ name: req.body.name.trim() });
        if (!existingIngredient) {
            await Ingredient.create({ name: req.body.name.trim() });
        }
        res.redirect('/ingredients');
    } catch (error) {
        console.log(error);
        res.redirect('/ingredients');
    }
};


module.exports = {
    index,
    create,
};