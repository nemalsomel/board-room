const express = require('express');
const app = express();
var cors = require('cors');
var randomWords = require('random-words');

app.use(cors());

var rooms = ["kiscica1", "kiscica2"];

app.get('/', (req, res) => res.send({message: "Server running..."}));

app.get('/rooms', (req, res) => res.send({data: rooms}));

app.get('/new-room', (req, res) => {
    var newRoom = randomWords({ exactly: 2, join: '-'});
    rooms.push(newRoom);
    setTimeout(() => {
        res.send({data: newRoom});
    },1000)
    //res.send({data: newRoom});
})


app.listen(3000, () => console.log('Example app listening on port 3000!'));  