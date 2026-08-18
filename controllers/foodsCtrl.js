const User = require('../models/user.js');

// index route
const index = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('foods/index.ejs', {foods: user.pantry});
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

// route to render the 'new' form 
const newFood = async (req, res) => {
    try {
        res.render('foods/new.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
} 



module.exports = {
    index,
    newFood,
};