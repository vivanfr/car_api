const express = require('express');
const bodyParser = require('body-parser');

// $ mdbc  => to generate db connection 
const mongoose = require('mongoose');
const carRouter = require('./routes/router');

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/car';


const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ extended: true}));

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection: ' + err);
    }
});

app.use(carRouter);

app.listen(8000, () => console.log(`Server started on ${PORT}`));