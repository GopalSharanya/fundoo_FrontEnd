var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();
const cors = require('cors');
app.use(cors());
const http = require('http');





app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/login.html'));
});

app.get('/login.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/login.html'));
});

app.get('/login.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/login.css'));
});

app.get('/register.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/register.html'));
});

app.get('/forgotPassword.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/forgotPassword.html'));
});


app.get('/dashboard.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/dashboard.html'));
});

var server = app.listen(process.env.PORT, () => {
    console.log("frontend server listening on port ", process.env.PORT);
});