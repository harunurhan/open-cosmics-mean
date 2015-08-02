var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stationSchema = new Schema({
	cluster: String,
	subcluster: String,
	country: String,
	name: String,
	location : {
		latitude: Number,
		longitude: Number,
		altitude: Number
	},
	livetime: Date,
	status: String,
	free: [],
	events: [
		{
			taskid: Number,
			images: {
				thumb: String,
				original: String
			},
			filePath: String,
			window: Boolean,
			time: [Date]
		}
	]
});
module.exports = mongoose.model('Station',stationSchema);
