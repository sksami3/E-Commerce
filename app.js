//Declearation
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
// var adminController = require('./controllers/admin/admin-controller');
var homeController = require('./controllers/home/user-controller');
// var empController = require('./controllers/employer/emp-controller');

//Config
app.set('view engine','ejs');


//MiddlewARE	
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use(express.static(__dirname + '/assecet'));
// app.use(express.static(__dirname + '/assects'));
// app.use('/register',  express.static(__dirname + '/home/register'));

//Routes
app.use('/register',homeController);
// app.use('/login',homeController);
// app.use('/admin',adminController);
// app.use('/logout',homeController);
// app.use('/employer',empController);


//Server Start
app.listen(3232,function(){
	console.log("app started at 3232");
});