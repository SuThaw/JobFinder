var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/Job');
var Promise =  require("bluebird");
var jobsData = require('../jobs-data');

function resetJobs(){
	return new Promise(function(resolve,reject){
		mongoose.connection.collections['jobs'].drop(resolve,reject);
	});
	
}


describe("get jobs",function(){
	var jobs;
	before(function(done){
		jobsData.connectDB('mongodb://localhost/jobfinder')
			.then(resetJobs)
			.then(jobsData.seedJob)
			.then(jobsData.findJobs)
			.then(function(collection){
				jobs = collection;
				
				done();	
			});
	});
	it("shoudl never be empty since jobs are seeded",function(){
		
			expect(jobs.length).to.be.at.least(1);		
				
	});

	it("should have job with title",function(){
		expect(jobs[0].title).to.not.be.empty;
	});

	it("should have job with description",function(){
		expect(jobs[0].description).to.not.be.empty;
	});
});