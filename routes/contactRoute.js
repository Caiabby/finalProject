var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'information tab' });
});
// router.post('/infor', function(req, res, next) {
// res.send('success')  });

module.exports = router;
