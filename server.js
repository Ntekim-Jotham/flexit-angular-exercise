const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/flexit'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/flexit/index.html'));
});

var listener = app.listen(process.env.PORT || 8000, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
  });