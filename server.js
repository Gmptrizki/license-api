const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const deviceRoutes = require('./routes/deviceRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/devices', deviceRoutes);

app.get('/', (req, res) => {
    res.send('Smart License API is running without a database connection.');
});

module.exports = app;