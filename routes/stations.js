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

module.exports = router;


