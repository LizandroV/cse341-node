//espress web server    
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello Lizandro!');
    });

app.listen(process.env.port || port);
console.log(`Server is running on port ${port}`);