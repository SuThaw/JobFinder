var express = require('express');
var bodyParser = require('body-parser');
module.exports = function(db){
	app.post('api/jobs',function(req,res){
		db.saveJob(req.body);
		res.end();
	});	
}
