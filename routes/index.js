var express = require('express');
var router = express.Router();
const axios = require('axios');

const apiKey = 'a1554b62fda6375c4b6ef43f7cb4cfe9';
const timeStamp = '1';
const hashPass = '5e7e2a348a47510cee643bf096d44061';

/* GET List */
router.get('/', (req, res, next) => {
  axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&offset=100&ts=${timeStamp}&apikey=${apiKey}&hash=${hashPass}`)
    .then(results => res.send(results.data.data))
});

module.exports = router;
