var express = require('express');
var router = express.Router();
var movies = require('./movies.json');
var _ = require('lodash');

router.get('/movies', function(req,res, next){
    res.send(movies);
})

router.get('/movies/:id', function(req,res, next){
    res.send(_.findWhere(movies, {id:parseInt(req.params.id)}));
})

module.exports = router;