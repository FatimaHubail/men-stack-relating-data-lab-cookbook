const User = require('../models/user.js');

// index route to list all users (community page)
const index = async (req, res) => {
    try {
        const users = await User.find({});
        res.render('users/index.ejs', { users });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
};

// route to view a single user's pantry (read-only)
const show = async (req, res) => {
    try {
        const otherUser = await User.findById(req.params.id);
        res.render('users/show.ejs', { otherUser });
    } catch (error) {
        console.log(error);
        res.redirect('/users');
    }
};

module.exports = {
    index,
    show,
};