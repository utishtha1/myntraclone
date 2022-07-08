
const Product = require('../models/product');

exports.find = async (data) => {

	let condition = {};

	if (data.status && typeof data.status != undefined && data.status != "") {
		condition.status = data.status;
	}
	if (data.gender && typeof data.gender != undefined && data.gender != "") {
		condition.gender = data.gender;
	}
	if (data.brandName && typeof data.brandName != undefined && data.brandName != "") {
		condition.brandName = data.brandName;
	}
	if (data.seasonType && typeof data.seasonType != undefined && data.seasonType != "") {
		condition.seasonType = data.seasonType;
	}
	if (data.offerAvailable && typeof data.offerAvailable != undefined && data.offerAvailable != "") {
		condition.offerAvailable = data.offerAvailable;
	}

	if (data.keyword && typeof data.keyword != undefined && data.keyword != "") {
		var regex = new RegExp(data.keyword, "i");
		condition.$or = [{ gender: regex },
		{ brandName: regex }]
	}
	console.log(condition)

	Product.aggregate([
		{ $match: condition },
		{
			$lookup: {
				"from": "productCategory",
				"localField": "category",
				"foreignField": "_id",
				"as": "category"
			}
		},
		{
			$unwind: {
				"path": "$category",
				"preserveNullAndEmptyArrays": true
			}
		},
		{
			$lookup: {
				"from": "industries",
				"localField": "industry",
				"foreignField": "_id",
				"as": "industry"
			}
		},
		{
			$unwind: {
				"path": "$industry",
				"preserveNullAndEmptyArrays": true
			}
		},
	]).then((product) => {
		// console.log('product', product)
		return {
			data: data,
		}
	}).catch((err) => {
		console.log(err);
		throw err;
	})
}