var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({

    id: Number,
    Name: String,
    Subject: String

});

module.exports = mongoose.model('Student', studentSchema);