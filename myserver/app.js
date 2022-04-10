var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://olidev:6QL3dyYwXmwwiSR@cluster0.yojtv.mongodb.net/deploytmdb?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then(() => console.log('CONNEXION DB OK'))
.catch (err => console.log('CONNEXION FAILED'))

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client-build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client-build/index.html"))
});

module.exports = app;
