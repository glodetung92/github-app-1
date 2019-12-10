var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var controller = require('./controllers/user.controller.js')

var userRoutes = require('./routes/user.route.js');






var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');




app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index',{
		name: 'BBB'
	});
});


app.use('/users', userRoutes);

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
