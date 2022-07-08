'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const product = new Schema({
	name: {
		type: String,
	},
	title: {
		type: String,
	},
	description: {
		type: String
	},
	specification: {},
	quantity: { type: Number, default: 0 },
	offerAvailable: {
		type: Boolean,
		default: false
	},
	offerPercentage: { type: String },
	offerDate: {
		type: Date
	},
	availableSizes: {},
	//enum :["s","xs", "m", "xl","xxl"],
	sellerName: {
		type: String,
	},
	brandName: {
		type: String,
	},
	productImages: {
		type: String,
	},
	seasonType: {
		type: String,
		enum: ['winter', "summer", "autum", "rainy", "all"],
		default: "all"
	},
	sellingCount: {
		type: Number,
	},
	status: {
		type: String,
		enum: ["active", "inactive"],
		default: "active",
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "ProductCategory",
		default: [],
	},
	industry: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "industries",
		default: [],
	},
	gender: {
		type: String,
		enum: ["men", "women", "kids", "all"],
		default: "all"
	},
	// allowApplyCoupon: { type: Boolean, default: true },
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},

})

module.exports = mongoose.model('product', product);



