const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tyagimayank243:GBaVI6qyNLIYIUDM@cluster0.dcmrbsn.mongodb.net/issuetracker?retryWrites=true&w=majority');

//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the databasef");
});