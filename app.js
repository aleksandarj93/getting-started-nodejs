var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo", "Beograd", "Lucani", "Kraljevo"]}
var nesto = "Ovo je samo test da da!"
var bla = "ovde se izvrsava wercker"

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
