const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const flights = await Flight.find();
        res.render('flights', { title: 'Available Flights', flights });
    } catch (err) {
        res.status(500).send('Error fetching flights');
    }
});

module.exports = router;