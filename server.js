var fs = require('fs');
var express = require('express');

var app = express();
var media = __dirname + '/www';
var gaia = process.env['GAIA'] || (__dirname + '/gaia');
var gaiaShared = gaia + '/shared';
// URL prefix to mimic GitHub Pages project.
var project = '/translator';

fs.exists(gaia, function(exists) {
  if (!exists) {
    throw new Error('Could not find gaia directory as $GAIA or local submodule. ' +
                    'Run git submodule update --init');
  }
});

app.configure(function() {
  app.use(express.logger({format: 'dev'}));
});

// Simulate how github pages serves the static files.
app.get('/', function (req, res) {
  res.redirect(project + '/');
});

// Simulate gaia's shared directory for local development.
app.configure(function() {
  app.use(project + '/shared', express.static(gaiaShared));
});

// Serve static files such as /www/img/*, /www/manifest.webapp, etc.
app.configure(function() {
  app.use(project, express.static(media));
});


var host = process.env['HOST'] || '0.0.0.0';
var port = process.env['PORT'] || 3000;
app.listen(port, host);
console.log('Listening at ' + host + ':' + port);
