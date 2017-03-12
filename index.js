var express = require('express')
 
var app = express();

app.set('port', (process.env.PORT || 5000));
 
app.get('/notes', function(req, res) {
    var to = req.query.To;
    res.header('Content-Type','text/xml').send('<Response><Dial callerId="123123"><Number>' + to +'</Number></Dial></Response>');
})
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});