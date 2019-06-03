const express = require('express');
const path = require('path');
const axios = require('axios');
const credentials = require('./helper/apikeys')
const app = express();

app.use(express.static(path.join(__dirname, 'client')));


/* GET List */
app.get('/api', (req, res, next) => {
  axios.get(`https://developer.marvel.com/v1/public/characters?limit=100&offset=100&ts=${credentials.timeStamp}&apikey=${credentials.apiKey}&hash=${credentials.hashPass}`)
    .then(results => res.send(results.data.data))
});


const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;

