//Creates the express app.
const express = require('express');
const router = express.Router();

//.get to get the users page
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Eports the users page.
module.exports = router;
