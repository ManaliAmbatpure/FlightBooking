const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 80;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/flightBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Render the "index.ejs" file
});

// Sample route
app.get('/about', (req, res) => {
    res.render('about'); // Render the "about.ejs" file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});