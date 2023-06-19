const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function getNotes() {
    const dbNotes = readFileAsync('./db/db.json', 'utf8').then(function(data) {
        dbNotes = [].concat(JSON.parse(data))
        res.json(dbNotes);
    });
}

function addNotes () {
    const dbNote = req.body;
    readFileAsync('./db/db.json', 'utf8').then(function(data) {
        const dbNotes = [].concat(JSON.parse(data));
        noteList.id = notes.length + 1
        
    })
}

module.exports = store;