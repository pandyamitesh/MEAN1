var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var passport	= require('passport');
var config      = require('./Config/database'); // get db config file
var User        = require('./Models/user'); // get the mongoose model
var jwt         = require('jwt-simple');
var swagger = require("swagger-node-express");


app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

swagger.setAppHandler(app);

mongoose.connect(config.database);

//pass passport for configuration
require('./config/passport')(passport);

//bundle our routes
var apiRoutes = express.Router();

//create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function(req, res) {
if (!req.body.name || !req.body.password) {
 res.json({success: false, msg: 'Please pass name and password.'});
} else {
 var newUser = new User({
   name: req.body.name,
   password: req.body.password
 });
 // save the user
 newUser.save(function(err) {
   if (err) {
     return res.json({success: false, msg: 'Username already exists.'});
   }
   res.json({success: true, msg: 'Successful created new user.'});
 });
}
});

apiRoutes.post('/authenticate', function(req, res) {
	  User.findOne({
	    name: req.body.name
	  }, function(err, user) {
	    if (err) throw err;
	 
	    if (!user) {
	      res.send({success: false, msg: 'Authentication failed. User not found.'});
	    } else {
	      // check if password matches
	      user.comparePassword(req.body.password, function (err, isMatch) {
	        if (isMatch && !err) {
	          // if user is found and password is right create a token
	          var token = jwt.encode(user, config.secret);
	          // return the information including token as JSON
	          res.json({success: true, token: 'JWT ' + token});
	        } else {
	          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
	        }
	      });
	    }
	  });
	});


apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
	console.log('Start Hitting  memberinfo='+req.headers);
	  var token = getToken(req.headers);
	  if (token) {
	    var decoded = jwt.decode(token, config.secret);
	    console.log('decoded='+decoded);
	    User.findOne({
	      name: decoded.name
	    }, function(err, user) {
	        if (err) throw err;
	 
	        if (!user) {
	          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
	        } else {
	          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
	        }
	    });
	  } else {
	    return res.status(403).send({success: false, msg: 'No token provided.'});
	  }
	});
	 
	getToken = function (headers) {
	  if (headers && headers.authorization) {
	    var parted = headers.authorization.split(' ');
	    if (parted.length === 2) {
	      return parted[1];
	    } else {
	      return null;
	    }
	  } else {
	    return null;
	  }
	};

app.get('/', function(req, res) {
	  res.send('Hello! The API is at http://localhost:' + 4000 + '/api');
	});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

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

var server = app.listen(4000,function(){
	console.log('Server running at http://localhost:4000/');

});

//connect the api routes under /api/*
app.use('/api', apiRoutes);


var findById = {
		  'spec': {
		    "description" : "EPPE EPPE ",
		    "path" : "/pet.{format}/{petId}",
		    "notes" : "EPPE  pet based on ID",
		    "summary" : "Find pet by ID",
		    "method": "GET",
		    "parameters" : [swagger.pathParam("petId", "ID of pet that needs to be fetched", "string")],
		    "type" : "Pet",
		    "errorResponses" : [swagger.errors.invalid('id'), swagger.errors.notFound('pet')],
		    "nickname" : "getPetById"
		  },
		  'action': function (req,res) {
		    if (!req.params.petId) {
		      throw swagger.errors.invalid('id');
		    }
		    var id = parseInt(req.params.petId);
		    var pet = petData.getPetById(id);
		 
		    if (pet) {
		      res.send(JSON.stringify(pet));
		    } else {
		      throw swagger.errors.notFound('pet');
		    }
		  }
		};
		 
		swagger.addGet(findById);
		
		swagger.configure("http://localhost", "0.1");