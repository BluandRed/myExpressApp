//Createsthe express app
const express = require('express');
const router = express.Router();

//.get to get the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog' });
});

//Exports the home page.
module.exports = router;
