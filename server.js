var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.status(undefined).send('not ok');
  // or
 res.sendStatus(undefined);
});

app.listen(3000);
