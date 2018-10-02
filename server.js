const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const toDoList = require('./todo-list.js');

const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to the Mongo DB using the inventorymaster database (will be created if it doesn't exist)
mongoose.connect('mongodb://localhost/toDoListmaster', { useNewUrlParser: true });

// app.get('/api/todolist', function (req, res) {
//     res.json(toDoList);
// });

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(express.static(__dirname + '/public'));

// app.post('/api/todolist', function (req, res) {
//     if (req.body === '') {
//         res.json({ success: false });
//     }
//     else{
//         toDoList.push(req.body);
//         res.json(toDoList);
//         res.json({ success: true });
//     }
// });

app.delete('/api/todolist', function (req, res) {
    toDoList.splice(toDoList.findIndex(e => e === req.body), 1);
    res.json({ success: true });
});

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});

app.get('/api/todolist', function (req, res) {
    db.toDoList.find({})
        .then(function (dbList) {
            res.json(dbList);
        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

app.post('/api/todolist', function (req, res) {
    // Create a new todo entry in the database
    db.toDoList.create(req.body)
        .then(function (dbList) {
            // Then send the results to the client
            res.json(dbList);
        })
        .catch(function (err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
});