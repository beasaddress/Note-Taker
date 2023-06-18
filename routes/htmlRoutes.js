//importing path 
const path = require('path');
const router = require('express').Router();

//setting up a route that will handle a get request to the notes path
//and then takes the resonse object and sends it to the client (or browser) using the path below
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});