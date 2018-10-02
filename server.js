const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const toDoList = require('app.js');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/todolist', function(req,res){
    res.json(toDoList);
});

app.post('/api/todolist', function (req, res) {
    toDoList.push(req.body);
    res.json({success: true});
});

app.delete('/api/todolist', function(req,res){
    toDoList.splice(toDoList.findIndex(e => e===req.body), 1);
    res.json({success: true});
});

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});

