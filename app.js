var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cosimg = require('./routes/cosimg'); //routes are defined here
var app = express(); //Create the Express app
var dbName = 'exampleDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); // static content
app.use('/api', cosimg); //This is our route middleware
module.exports = app;