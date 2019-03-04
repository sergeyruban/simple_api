const objectId = require('mongodb').ObjectID;
const database = require('../database');

exports.all = cb => {
    database.get()
        .collection('users')
        .find({})
        .toArray((err, docs) => {
            cb(err, docs);
        });
};

exports.getById = (id, cb) => {
    database.get()
        .collection('users')
        .findOne({ _id: objectId(id) }, (err, doc) => {
            cb(err, doc);
        });
};

exports.create = (user, cb) => {
    database.get()
        .collection('users')
        .insertOne(user, (err, result) => {
            cb(err, result);
        });
};

exports.update = (id, newUser, cb) => {
    database.get()
        .collection('users')
        .updateOne(
            { _id: objectId(id) },
            newUser,
            (err, result) => {
                cb(err, result);
            }
        );
};

exports.delete = (id, cb) => {
    database.get()
        .collection('users')
        .deleteOne({ _id: objectId(id) }, (err, result) => {
            cb(err, result);
        });
};
