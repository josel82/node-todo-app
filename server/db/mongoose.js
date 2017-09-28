const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Set up mongoose to use ES6 built-in Promises
mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = { mongoose };
