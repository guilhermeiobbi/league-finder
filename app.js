var PORT    = 3000;

var http    = require('http');
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');

/**
 *  Node Apis
 */
var api     = require('./routes/api');
var index   = require('./routes/index');

/**
 *  Server init 
 */
app.listen(PORT, function () {
  console.log('Server listening on PORT %s!', PORT);
});

/**
 * Including static folders and files
 */
app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes
 */
app.use('/', index);
app.use('/api', api);