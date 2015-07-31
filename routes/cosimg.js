var Cosimg = require('../models/cosimg');
var express = require('express');
var router = express.Router();

//retrieve all
router.route('/cosimg').get(function (req, res) {
	Cosimg.find({}).exec(function (err, data) {
		if(err) {
			return res.send(err);
		}
		res.json(data);
	});
});

//add new
router.route('/cosimg').post(function (req, res) {
	var movie = new Cosimg(req.body);
	movie.save(function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({message: 'New cosimg added'});
	});
});


//retrieve by id
router.route('/cosimg/:id').get(function (req, res) {
	Cosimg.findOne({ _id: req.params.id }, function (err, movie) {
		if(err) {
			return res.send(err);
		}
		res.json(movie);
	});
});

module.exports = router;


