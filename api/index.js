var express = require('express');
var router = express.Router();

router.get('/movies', function(req,res, next){
    res.send(require('./movies.json'));
})

module.exports = router;