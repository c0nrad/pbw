'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Person = mongoose.model('Person');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/interested', function(req, res) {
  console.log(req.body);

  var p = new Person({email: req.body.email});
  p.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.send('Thanks! We\'ll keep you informed of any updates! <a href="/"> Back </a>');
  });
});

module.exports = router;
