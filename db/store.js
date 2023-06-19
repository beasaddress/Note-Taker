const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

//function getNotes() {
   // const dbNotes = readFileAsync('./db/db.json', 'utf8').then(function(data) {
       // dbNotes = [].concat(JSON.parse(data))
       // res.json(dbNotes);
   // });
//}

function addNote () {
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

};

function removeNote() {

}

module.exports = { getNotes, addNote, removeNote };