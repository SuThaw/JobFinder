var mongoose = require('mongoose');
var Promise = require('bluebird');
var Job = mongoose.model('Job');



var findJobs = function findJobs(query){
	return Promise.cast(mongoose.model('Job').find(query).exec());
};
var jobs = [{title:'Cook',description:'You will be making begals'},
					{title:'Web Developer',description:'you will make website'},
					{title:'Mobile Developer',description:'you will create mobile application'}];



exports.findJobs = findJobs;
exports.connectDB = Promise.promisify(mongoose.connect,mongoose);

var createJob = Promise.promisify(Job.create,Job);

exports.seedJob = function(){
		return findJobs({}).then(function(collection){
			//createJob({title:'Cook',description:'You will be making begals'});
			//console.log(Job.create({title:'Cook',description:'You will be making begals'}));
			if(collection.length === 0){
				return Promise.map(jobs,function(job){
					return	createJob(job);
				});
			}
		});	
};