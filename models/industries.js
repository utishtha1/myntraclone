const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const industry = new Schema({
	name: { type: String },
	//textile, cosmetic ,footwears, homeAndLiving, digitals

	status: {
		type: String,
		enum: ["active", "inactive"],
		default: "inactive"
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},

})


const industires = mongoose.model('industries', industry);
// industires.bulkSave([
// 	{ name: "textile", status: "active" },
// 	{ name: "cosmetic", status: "active" },
// 	{ name: "footwears", status: "active" },
// 	{ name: "homeAndLiving", status: "active" },
// 	{ name: "digitals", status: "active" }])

module.exports = industires;