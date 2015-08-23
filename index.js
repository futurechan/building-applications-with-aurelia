var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json())

app.use('/api', require('./api'));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

app.use(function(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
})

app.use(function(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});