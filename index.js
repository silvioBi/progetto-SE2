//express lib
var express = require('express');
//general lib
var app = express();

app.set('port', (process.env.PORT || 5000));
/**
app.use('/', function(request, response) 
{
	var text = 'Hello world';
    
	response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(text);
  	
});
**/


// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));


// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
