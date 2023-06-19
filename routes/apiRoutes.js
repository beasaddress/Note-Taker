const router = require('express').Router();
//const store = require('../db/store');
const path = require('path');


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
    //store.addNote(req.body)//passing the request body as an arguement
    //.then((note) => res.json(note))
    //.catch((err) => res.status(500).json(err));


    console.info(`${req.method} request method to add note`);
    //destructuring items for reassignment
       const { title, text } = req.body;
        //checking if necessary properties are present
        if(title && text) {
            const newNote = {
                title,
                text,
                note_id: uuidv4(),
            };
            fs.readFile('./db/db.json', 'utf8', (err, data) => {
                if(err){
                    console.error(err);
                } else {
                    const parsedNotes = JSON.parsed(data);
                    //adding new note to the json object of exisiting file
                    parsedNotes.push(newNote);
                    //writing the updated list of note objects into the json file
                    fs.writeFile('/db/db.json', JSON.stringify(parsedNotes, null, 4),
                    (writeErr) =>
                    writeErr ? console.error(writeErr) : console.info('Successfully updated notes')
                    );
                }
            });
            const response = {
                status : 'success',
                body: newNote,
            };
            console.log(response);
            res.status(201).json(response);
            } else {
                res.status(500).json('Error in posting new note')
            }


});



//setting up a route to handle deleting notes. the delete request
//will call a removeNote funtion that will pass the note id as an arguement to remove it from the database
//router.delete('/notes/:id', (req, res) => {
    //store.removeNote(req.params.id)
    //.then(() => res.json({ ok: true }))//the callback function will send a json response indicating
    //the note was removed. response body will contain ok true
   // .catch((err) => res.status(500).json(err));
//});

module.exports = router;
