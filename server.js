var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data');
var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));
app.get('/api/jobs',function(req,res){
	jobsData.findJobs().then(function(collection){
		res.send(collection);
	});
});
app.get('*',function(req,res){
	res.render('index');
});

//jobsData.connectDB('mongodb://suthaw:plp2tlh@ds061370.mongolab.com:61370/jobfinder');
jobsData.connectDB('mongodb://suthaw:plp2tlh@ds061370.mongolab.com:61370/jobfinder')
	.then(function(){
		console.log('connected to mongodb succesfully');
		jobsData.seedJob();
	});



app.listen(process.env.PORT || 3000 );
