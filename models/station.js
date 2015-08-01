var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stationSchema = new Schema({
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
			imgPath: String,
			filePath: String,
			window: Boolean,
			time: [Date]
		}
	]
});
module.exports = mongoose.model('Station',stationSchema);
