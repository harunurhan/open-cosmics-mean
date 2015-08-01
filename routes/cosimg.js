var Cosimg = require('../models/cosimg');
var express = require('express');
var router = express.Router();

//retrieve all
router.route('/cosimgs').get(function (req, res) {
	Cosimg.find({}).exec(function (err, data) {
		if(err) {
			return res.send(err);
		}
		res.json(data);
	});
});

//add new
router.route('/cosimgs').post(function (req, res) {
	var cosimg = new Cosimg(req.body);
	cosimg.save(function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({message: 'New cosimg added'});
	});
});


//retrieve by id
router.route('/cosimgs/:id').get(function (req, res) {
	Cosimg.findOne({ _id: req.params.id }, function (err, cosimg) {
		if(err) {
			return res.send(err);
		}
		res.json(cosimg);
	});
});

//delete by id
router.route('/cosimgs/:id').delete( function (req, res) {
	Cosimg.remove({_id: req.params.id}, function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({ message: 'Cosimg deleted'});
	});
});

module.exports = router;


