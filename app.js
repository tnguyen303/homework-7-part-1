// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 8080;

const toDoList = ["Buy diaper", "Change light bulb", "Do homework", "Clean room", "Take wife out"];

let index = 0;
toDoList.forEach(e => {
    $('#content').append(`
    <div id='item-${index}' class="toDoItem">
    <input class="finishedBtn" type="checkbox">
    <span>${e}</span>
    <a href="#"><span id='deleteBtn-${index}' class="delete fas fa-times" value='${index}'></span></a>
    </div>`);
    index ++;
});

$('.fa-share').on('click', function (event) {
    event.preventDefault();
    $('#content').append(`
    <div id='item-${index}' class="toDoItem">
    <input class="finishedBtn" type="checkbox">
    <span>${$('#newInput').val().trim()}</span>
    <a href="#"><span id='deleteBtn-${index}' class="delete fas fa-times" value='${index}'></span></a>
    </div>`)
    $('#newInput').val('');
    toDoList.push($('#newInput').val().trim());
    index ++;
});

$(document).ready(function(){
    $(document).on('click', '.delete', function(event){
        event.preventDefault();
        //extract number from value property of clicked button
        const deleteId = $(this).attr('value');
        $(`#item-${deleteId}`).remove();
    });
});

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/api/todolist', function (req, res) {
//     console.log(req.body);
//     //end response
//     res.end();
// });

// app.delete('/', function (req, res) {
//     toDoList[toDoList.findIndex(e => e.)]//not sure how this is handled
//     res.end();
// });

// $.ajax({ url: '/api/todolist', method: 'POST', data: newReservation }).then(
//     function (data) {

//         // If our POST request was successfully processed, proceed on
//         if (data.success) {

//             console.log('data', data)
//             // If a table is available... tell user they are booked.
//             if (!data.waitlist) {
//                 alert('Yay! You are officially booked!');
//             }

//             // If a table is available... tell user they on the waiting list.
//             else {
//                 alert('Sorry you are on the wait list');
//             }

//             // Clear the form when submitting
//             $('#reserve-name').val('');
//             $('#reserve-phone').val('');
//             $('#reserve-email').val('');
//             $('#reserve-unique-id').val('');

//             $('#reserve-name').focus();
//         } else {

//             alert('There was a problem with your submission. Please check your entry and try again.');
//         }


//     });
