const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req,res) => {
    console.log(req.body);
    // let addNote = req.body;
    // readAndAppend(addNote, './db/db.json')
});

module.exports = app;