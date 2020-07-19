require('app-module-path').addPath(__dirname);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');

var db = require('./models');
db.sequelize.sync();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  var status = (err.status || 500) * 100;
  db.Test.create({'message': err.message, 'code': status});
  res.status(err.status || 500);
  res.json({'message': err.message, 'code': status});
});

app.listen(3000, () => {
  console.log(`app listening on port 3000!`)
});

//module.exports = app;