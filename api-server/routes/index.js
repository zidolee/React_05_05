var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = {
    name : 'jack',
    age : 20,
    address : '대구'
  }

  res.json(data);
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
