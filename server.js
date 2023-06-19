//importing express and routes
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const store = require('./db/store');
//unique identifier
const { v4: uuidv4 } = require('uuid');
//dependencies
const fs = require('fs');
const util = require('util');

//initializing express app and creating a port
const app = express();
const PORT = process.env.PORT || 3001;

//body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//adding middleware to configure express to serve the static files
//from the "public" directory
app.use(express.static('public'));

//setting up a middleware to handle requests starting with /api
app.use('./api', apiRoutes);
//middleware for handling HTML pages
app.use('/', htmlRoutes);

//listening on port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));