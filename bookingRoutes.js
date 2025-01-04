const express = require('express');
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const router = express.Router();

// Endpoint to create a booking
router.post('/book', async(req, res) => {
    try {
        const { flightId, userId } = req.body;

        // Find the flight to book
        const flight = await Flight.findById(flightId);
        if (!flight) {
            return res.status(404).send('Flight not found');
        }

        // Create a new booking
        const booking = new Booking({
            userId,
            flightId,
            date: new Date(),
        });

        await booking.save();

        res.redirect('/bookings');
    } catch (err) {
        res.status(500).send('Error creating booking');
    }
});

// Endpoint to view all bookings
router.get('/', async(req, res) => {
    try {
        const bookings = await Booking.find().populate('flightId').populate('userId');
        res.render('bookings', { title: 'Your Bookings', bookings });
    } catch (err) {
        res.status(500).send('Error fetching bookings');
    }
});

module.exports = router;