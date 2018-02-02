'use strict';

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


//Set the port number
var port = process.env.PORT || 3000;

//Assigns setting name to value
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

//Static file representation
app.use(express.static('public'));

app.use(function (req, res, next) {
    res.status(200).sendFile(process.cwd() + '/app/views/index.htm');
});


//Middleware to catch 404 errors
app.use(function (req, res, next) {
    res.status(404).sendFile(process.cwd() + '/app/views/404.htm');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});