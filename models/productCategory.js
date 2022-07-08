const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const productCategory = new Schema({
	name: { type: String },

	// productType: {
	// 	type: String,
	// 	enum: ["jeans", "shoes", "watches", "beautyProduct", "saari", "suites","top","shirt","dresses","heels","shorts",],
	// 	default: "all",
	// },
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


const Category = mongoose.model('productCategory', productCategory);
// Category.bulkSave([
// 	{ name: "jeans", status: "active" },
// 	{ name: "shoes", status: "active" },
// 	{ name: "watches", status: "active" },
// 	{ name: "beautyProduct", status: "active" },
// 	{ name: "saari", status: "active" },
// 	{ name: "suites", status: "active" },
// 	{ name: "top", status: "active" },
// 	{ name: "dresses", status: "active" },
// 	{ name: "shirt", status: "active" },
// 	{ name: "shorts", status: "active" },
// ])
module.exports = Category;