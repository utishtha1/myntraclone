
const Product = require('../models/product');
const ProductBussiness = require('../bussiness/productBussiness')

// {
// 	name: ' floreant cloth',
// 	title: ' clothing',
// 	description: 'wao',
// 	quantity: '10',
// 	offerAvailable: 'false',
// 	availableSizes: '{s,xs , m, xl, xxl}',
// 	sellerName: 'manish',
// 	brandName: 'hm',
// 	productImages: 'abc',
// 	seasonType: 'winter',
// 	category: '62c753fa74488926905e08ae',
// 	industry: '62c7539374488926905e08a9',
// 	gender: 'women'
//   }

module.exports.addProduct = async(req, res) => {
	try {
		console.log('product', req.body)
		Product.create(req.body).then((product) => {

			return res.status(200).send({
				message: "successfully added",
				data: product
			});
		})
	} catch (error) {
		res.status(500).send({ "message": error })
	}
}

module.exports.productsList = async(req, res) => {
	try {
		let data = req.query;
		console.log(data)
		const product = await ProductBussiness.find(req.query);
		if (product) {
			return res.status(Constants.STATUSCODE.SUCCESS).send(product);
		}

	} catch (error) {
		res.status(500).send({ "message": error })
	}
}

module.exports.productDetail = async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id });
		if (!product) {
			return res.status(400).send({ message: "request Not Found" });

		}
		return res.status(200).send({ data: product });

	} catch (error) {
		res.status(500).send({ "message": error })
	}
}



module.exports.destroy = (req, res) => {
	Product.findByIdAndRemove({ _id: req.params.id }).exec().then(() => {
		return res.status(200).json({ message: " product delete"});
	}).catch((error) => {
		return res.status(400).json({ message: [error.message] });
	});
}