//Imports http-errors to allow the creation of error objects.
const createError = require('http-errors');
//Imports express to allow the creation of an exprress app
const express = require('express');
//Imports the express path module
const path = require('path');
//Imports cookie parser
const cookieParser = require('cookie-parser');
//Imports morgan logger middlewear
const logger = require('morgan');

//Requires the express apps pages.
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//Creates the express application.
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Impiments morgan logger, urlencoded middlewares and the json, cookie parser and path modules.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Calls on the express apps pages.
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Eports the app to the server/port
module.exports = app;
