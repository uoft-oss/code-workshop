const config = require("./config.js");

/**
 * LOGIN template by : https://github.com/knoldus/Node.js_UserLogin_Template 
 */

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path');
var fs = require('fs');
var http = require('http');
var server = http.createServer(app);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");


mongoose.connect(config.uri, { useNewUrlParser: true }); 

require('./config/passport')(passport); 

// configureation
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: 'oss-workshop',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
})); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

// pug
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "template"));

app.get("/", function(req, res){
    res.render("index", {data: 'data'});
});

app.get('/login', function(request, response) {
    response.render('login.html', { message: request.flash('error') });
});

app.get('/signup', function(request, response) {
    response.render('signup.html', { message: request.flash('signuperror') });
}); 

app.post('/login', passport.authenticate('login', {
    successRedirect : '/', 
    failureRedirect : '/', 
    failureFlash : true
}));

app.post('/signup', passport.authenticate('signup', {
    successRedirect : '/',
    failureRedirect : '/', 
    failureFlash : true 
}));

server.listen(port);
console.log('Listening  to  port ' + port);