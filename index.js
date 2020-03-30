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

app.get('/register.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/register.css'));
});

app.get('/dashbord.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/dashbord.css'));
});


app.get('/register.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/register.html'));
});

app.get('/forgotPassword.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/forgotPassword.html'));
});


app.get('/dialog.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/dialogBox.html'));
});

app.get('/dashboard.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/dashboard.html'));
});

app.get('/one.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/one.html'));
});

app.get('/one.jpeg', function (req, res) {
    res.sendFile(path.join(__dirname + '../../../one.jpeg'));
});

app.get('/archive.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/archive.html'));
});

app.get('/profile1.png', function (req, res) {
    res.sendFile(path.join(__dirname + 'C:\Users\MY PC\Pictures\profile1.png'));
});

app.get('/binn.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/binn.html'));
});


app.get('/takeaNote.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/takeaNote.html'));
});


app.get('/displayNote.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/displayNote.html'));
});


app.get('/icons.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/icons.html'));
});



app.get('/trythis.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/trythis.html'));
});


app.get('/trythis.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/components/trythis.css'));
});







var server = app.listen(process.env.PORT, () => {
    console.log("frontend server listening on port ", process.env.PORT);
});