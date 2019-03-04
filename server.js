const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const userController = require('./controllers/userController');

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'myapi';

database.connect(url, dbName, err => {
    if (err) {
        return console.log(err);
    }

    app.listen(8081, function() {
        console.log(
            `Simple API started on http://localhost:${this.address().port}`
        );
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Simple API!');
});

app.get('/users', userController.all);

app.get('/users/:id', userController.getById);

app.post('/users', userController.create);

app.put('/users/:id', userController.update);

app.delete('/users/:id', userController.delete);
