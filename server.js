const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//establish port
const PORT = process.env.PORT || 3001;

//assume "public" file instead of writing it in filepath
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//listen at port established earlier
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);