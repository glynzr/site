const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/part1', (req, res) => {
    res.sendFile(__dirname + '/html/part1.html');
});

app.get('/part2', (req, res) => {
    res.sendFile(__dirname + '/html/part2.html');
});


app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/html/admin.html');
});

app.listen(3000);