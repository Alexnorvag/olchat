'use strict';

var express = require('express');
var app = express();

//Set the port number
var port = process.env.PORT || 3000;

app.use('/', function (req, res) {
    res.send('Hello World!');
});

// app.use(function (req, res, next) {
//     res.status(200).sendFile(process.cwd() + '/app/views/index.htm');
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});