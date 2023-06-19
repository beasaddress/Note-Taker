const router = require('express').Router();
const store = require('../db/store');


//setting up a route handler for a get request to /notes path
router.get('/notes', (req, res) => {
    //this get request will call a function from the store module
    store.getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});
//setting up a route handler for post requests
router.post('/notes', (req, res) => {
    //this post request calls a function from store.js that will add a new note to the database
    store.addNote(req.body)//passing the request body as an arguement
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
//setting up a route to handle deleting notes. the delete request
//will call a removeNote funtion that will pass the note id as an arguement to remove it from the database
router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))//the callback function will send a json response indicating
    //the note was removed. response body will contain ok true
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
