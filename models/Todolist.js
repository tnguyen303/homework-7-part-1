const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const toDoSchema = new Schema({
  task: {
    type: String,
    unique: true,
    required: "You must include a task"
  },
  done: {
    type: Boolean,
    required: "You must include this"
  }
});

// This creates our model from the above schema, using Mongoose's model method
const toDoList = mongoose.model('toDoList', toDoSchema);

// Export the to do list model
module.exports = toDoList;
