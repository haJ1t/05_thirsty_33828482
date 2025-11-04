// app.js
// Main server entry point for the Thirsty Student Shop web app.
// Configures Express, EJS, middleware, routes, and server startup.

// Setup express and ejs
var express = require('express');
var ejs = require('ejs');

// Create the express application
const app = express();
const port = 8000;

// Configure EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse form data (urlencoded)
app.use(express.urlencoded({ extended: true }));

// Route setup
const mainRoutes = require('./routes/main');  
app.use('/', mainRoutes);

// Start the web server
app.listen(port, () => console.log(`Thirsty Student Shop running on port ${port}`));