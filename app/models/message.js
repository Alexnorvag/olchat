'use strict';

var messageModel = require('../database').models.message;
var User = require('../models/room');
var Room = require('../models/user');

var create = function (data, callback) {
    var newMessage = new messageModel(data);
    newMessage.save(callback);
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

module.exports = {
    create,
    findOne,
    findById,
    isAuthenticated
};