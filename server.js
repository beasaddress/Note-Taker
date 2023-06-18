//importing express and routes
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initializing express app and creating a port
const app = express();
const PORT = process.env.PORT || 3001;

//body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static
