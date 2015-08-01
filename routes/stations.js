var Station = require('../models/station');
var express = require('express');
var router = express.Router();

//retrieve all
router.route('/stations').get(function (req, res) {
	Station.find({}).exec(function (err, data) {
		if(err) {
			return res.send(err);
		}
		res.json(data);
	});
});

//add new
router.route('/stations').post(function (req, res) {
	var station = new Station(req.body);
	station.save(function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({message: 'New station added'});
	});
});


//retrieve by id
router.route('/stations/:id').get(function (req, res) {
	Station.findOne({ _id: req.params.id }, function (err, station) {
		if(err) {
			return res.send(err);
		}
		res.json(station);
	});
});

//delete by id
router.route('/stations/:id').delete( function (req, res) {
	Station.remove({_id: req.params.id}, function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({ message: 'Station deleted'});
	});
});

//retrieve detail page of station by station id
router.route('/stations/detail/:id').get(function (req, res) {
	Station.findOne({ _id: req.params.id }, function (err, station) {
		if(err) {
			return res.send(err);
		}
		res.render('station', { station: station });
	});
});

//retrieve detail page of event by station id and event index
//we did not want it to be like this but you know, this is an hackathon
router.route('/stations/:id/events/:idx').get(function (req, res) {
	Station.findOne({ _id: req.params.id }, function (err, station) {
		if(err) {
			return res.send(err);
		}
		res.render('event', { event: station.events[req.params.idx]});
	});
});
module.exports = router;


