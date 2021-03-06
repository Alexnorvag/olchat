'use strict'

var Mongoose = require('mongoose');

var MessageSchema = new Mongoose.Schema({
    content: String,
    userId: String,
    roomId: String,
    date: {
        type: Date,
        default: Date.now
    }
});

var messageModel = Mongoose.model('message', MessageSchema);

module.exports = messageModel;