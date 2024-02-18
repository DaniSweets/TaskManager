const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//establish port
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//html routes so links work
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//listen at port established earlier
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);