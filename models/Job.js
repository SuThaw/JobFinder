var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
	title:{type:String},
	description:{type:String}
});

var Job = mongoose.model('Job',jobSchema);

exports.seedJob = function(){
	Job.find({}).exec(function(error,collection){
		if(collection.length === 0){
			Job.create({title:'Cook',description:'You will be making begals'},
				{title:'Web Developer',description:'you will make website'},
				{title:'Mobile Developer',description:'you will create mobile application'}
				);
		}
	});
};