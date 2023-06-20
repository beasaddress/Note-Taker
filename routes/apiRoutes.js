const api = require('express').Router();
const path = require('path');
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const store = require('../db/store');





//setting up a route handler for a get request to /notes path
api.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
//setting up a route handler for post requests
api.post('/notes', (req, res) => {
    console.info(`${req.method} request method to add note`);
    //destructuring items for reassignment
       const { title, text } = req.body;
        //checking if necessary properties are present
        if(title && text) {
            const newNote = {
                title,
                text,
                note_id: uuidv1(),
            };
            fs.readFile('./db/db.json', 'utf8', (err, data) => {
                if(err){
                    console.error(err);
                } else {
                    const parsedNotes = JSON.parse(data);
                    //adding new note to the json object of exisiting file
                    parsedNotes.push(newNote);
                    //writing the updated list of note objects into the json file
                    fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4),
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

//router.delete('/notes/:id', (req, res) => {
    
//});

module.exports = api;
