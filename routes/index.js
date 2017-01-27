const router = require('express').Router();


router.get('/home/:username', function(req, res, next){
  res.send('hello Im home!');
} )




module.exports = router;
