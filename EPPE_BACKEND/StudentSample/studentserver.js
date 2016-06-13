/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello EPPE Backend\n');
}).listen(3000,'localhost');
console.log('Server running at http://localhost:3000/');*/

/*// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //res.send('hello EPPE2');
	res.json({hello:'Hello EPPE Backend'});
});
*/
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var swagger = require("swagger-express");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



var students = require("./student_routs.js")(app);

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:9080',
    swaggerJSON: '/api',
    swaggerUI: './ss',
    apis: ['./student_routs.js']
  }));

var server = app.listen(9080,function(){
	console.log('Server running at http://localhost:9080/');

});
