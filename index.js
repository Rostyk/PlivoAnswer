var express = require('express')
 
var app = express()
 
app.get('/notes', function(req, res) {
    var from = req.query.from;
    res.header('Content-Type','text/xml').send('<yo>' + from + '</yo>');
})
 
app.listen(3000)