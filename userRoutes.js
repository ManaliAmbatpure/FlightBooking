const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send('Error registering user');
    }
});

router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user && user.password === req.body.password) {
            res.redirect('/flights');
        } else {
            res.status(400).send('Invalid login credentials');
        }
    } catch (err) {
        res.status(500).send('Error logging in');
    }
});

module.exports = router;