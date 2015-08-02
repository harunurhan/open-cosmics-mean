var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var station = require('./routes/stations'); //routes are defined here
var app = express(); //Create the Express app
var dbName = 'opencosmics';
var connectionString = 'mongodb://opencosmics.cern.ch:27017/' + dbName;

app.set('views', __dirname+'/views'); // used to get ,jade temps

mongoose.connect(connectionString);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); // static content
app.set('view engine', 'jade'); // set view engine to jade
app.use('/api', station); //This is our route middleware
module.exports = app;