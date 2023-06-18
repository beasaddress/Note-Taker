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


module.exports = router;
