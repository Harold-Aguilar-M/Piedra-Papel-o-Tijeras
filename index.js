// Import librarys
const express = require('express');
const path = require('path');

// Import custom modules
const config = require('./config/config');
const indexRouter = require('./routes/indexRoutes');

// Create a new Express application an configure it 
const app = express();

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configure routes
app.use('/', indexRouter);

// Files statics
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(config.PORT, () => {
    console.log(`The server was initialized on port: ${config.PORT}`);
})