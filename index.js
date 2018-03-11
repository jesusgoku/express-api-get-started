const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Note = require('./models/Notes');
const configDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(`${configDB.url}/note-api`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoClient.connect(configDB.url, (err, database) => {
//     if (err) return console.log(err);

//     const db = database.db('note-api');

    require('./routes')(app, {});
    app.listen(port, () => {
        console.log(`Listen on: ${port}`);
    });
// });
