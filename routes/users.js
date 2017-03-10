var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/list');
});

/* GET users form new user. */
router.get('/new', function(req, res, next) {
  res.render('user/new');
});

module.exports = router;
