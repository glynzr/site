const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
var task2 = "";

app.get('/part1', (req, res) => {
    res.sendFile(__dirname + '/html/part1.html');
});

app.get('/part2', (req, res) => {
    res.render("part2", { task2: task2 });
});


app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/html/admin.html');
});

app.post('/posted1', (req, res) => {
    // use fs to write to a image file
    var base64Data = req.body.data.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile(__dirname + "/public/task1.png", base64Data, 'base64', function(err) {
        console.log(err);
    });
    console.log(req.body.data);
    res.send('posted');
});
app.post('/posted2', (req, res) => {
    // use fs to write to a image file
    task2 = req.body.data;
    res.send('posted');
});

app.listen(3000);