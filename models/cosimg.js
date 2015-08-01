var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cosimgSchema = new Schema({
	imgPath: String,
	filePath: String,
	longitude: Number,
	latitude: Number
});
module.exports = mongoose.model('Cosimg',cosimgSchema);