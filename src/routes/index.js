var express = require('express');
var db = require('models/index');

var router = express.Router();

router.get('', function(req, res, next) {
  db.Test.findAll().then(function(tests) {
    res.render('index', {'tests': tests});
  });
});

module.exports = router;
