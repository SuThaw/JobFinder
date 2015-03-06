var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');

var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));
app.get('/api/jobs',function(req,res){
	mongoose.model('Job').find({}).exec(function(err,collection){
		res.send(collection);
	});
});
app.get('*',function(req,res){
	res.render('index');
});

mongoose.connect('mongodb://suthaw:plp2tlh@ds061370.mongolab.com:61370/jobfinder');
var con = mongoose.connection;
con.once('open',function(){
	console.log('connected to mongodb succesfully');
	jobModel.seedJob();
});

app.listen(process.env.PORT || 3000 );
