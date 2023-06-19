const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function getNotes() {
    const dbNotes = readFileAsync('./db/db.json', 'utf8').then(function(data) {
        dbNotes = [].concat(JSON.parse(data))
        res.json(dbNotes);
    });
}

function addNote () {
    const dbNote = req.body;
    readFileAsync('./db/db.json', 'utf8').then(function(data) {
        const dbNotes = [].concat(JSON.parse(data));
        dbNote.id = dbNotes.length + 1
        dbNotes.push(dbNote);
        return dbNotes
        }).then(function(dbNotes) {
            writeFileAsync('./db/db.json', JSON.stringify(dbNotes))
            res.json(dbNote);
        });
}

function removeNote() {

}

module.exports = { getNotes, addNote, removeNote };