//Imports the express app
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog' });
});

//Exports the index page
module.exports = router;
