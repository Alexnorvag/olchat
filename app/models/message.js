'use strict';

var messageModel = require('../database').models.message;
var User = require('../models/room');
var Room = require('../models/user');

var create = function (data, callback) {
    var newMessage = new messageModel(data);
    newMessage.save(callback);
};

var find = function (data, callback) {
    messageModel.find(data, callback);
};

var findOne = function (data, callback) {
    messageModel.findOne(data, callback);
}

var findById = function (id, callback) {
    messageModel.findById(id, callback);
}

/**
 * A middleware allows user to get access to pages ONLY if the user is already logged in.
 *
 */
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
}

/**
 * Get all messages in a room 
 */
var getMessages = function (message, socket, callback) {

    // Get current user's id
    var userId = socket.request.session.passport.user;

    var messages = [];
    // var _users = [];

    // User.findById(userId, function (err, users) {
    //     console.log("MESSAGES USERS:", users);
    // });

    messages = message;

    return callback(null, messages/* , _users */);
}


module.exports = {
    create,
    find,
    findOne,
    findById,
    isAuthenticated,
    getMessages
};