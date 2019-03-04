const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = (url, dbName, done) => {
    if (state.db) {
        return done();
    }

    let mongoClient = new MongoClient(url, { useNewUrlParser: true });

    mongoClient.connect((err, db) => {
        if (err) {
            return done(err);
        }

        state.db = db.db(dbName);

        done();
    });
};

exports.get = () => {
    return state.db;
};
