const Product = require('../models/product');
const Industries = require('../models/industries');
const Category = require('../models/productCategory');
const ProductBussiness = require('../bussiness/productBussiness');


module.exports.homepage = async (req, res) => {
	try {

		let homePage = {};
		const brandCategory = await Product.distinct('brandName');
		homePage.brandCategory = brandCategory
		const offerAvailable = await Product.find({
			offerDate: {
				$gt: new Date()
			}, offerAvailable: true
		})
		const industries = await Industries.find();
		const category = await Category.find();

		homePage.offerAvailable = offerAvailable;
		homePage.industries = industries;
		homePage.category = category;

		res.status(200).send(homePage)


	} catch (error) {
		res.status(500).send({ "message": error })
	}
}

































// router.post('/signup', (req, res) => {
// 	try {
// 		if (userObj.email == req.body.email) {
// 			res.status(400).send({ "message": "user already exists" })
// 		}
// 		if (req.body.password != req.body.password) {
// 			res.status(400).send({ "message": "password doesn't match" })
// 		}
// 		let obj = req.body;
// 		obj.id = crypto.randomBytes(32).toString('hex')
// 		userObj.push(obj);
// 		console.log(userObj)
// 		let userToken = generateToken({ id: obj.id, username: obj.username, email: obj.email });
// 		res.json({ obj, userToken });

// 	} catch (error) {
// 		res.status(500).send({ error: error })
// 	}
// });

// router.post("/login", (req, res) => {
// 	try {
// 		let user = search(req.body.email, userObj)
// 		if (req.body.email != user.email && req.body.password != user.password) {
// 			res.status(400).send({ "message": "please add valid input" })
// 		}
// 		//	let userToken = generateToken({ id: userObj.id, username: userObj.username, email: userObj.email });
// 		res.json({ userObj, userToken });

// 	} catch (error) {
// 		res.status(500).send({ error: error })
// 	}


// });

// router.post("/resetPassword", authentication, (req, res) => {
// 	try {
// 		let newPassword = req.body.newPassword;
// 		let oldPassword = req.body.oldPassword;
// 		if (newPassword == oldPassword) {
// 			res.status(400).send({ "message": "please try again , you can not keep old password!!" })
// 		}
// 		let user = search(req.user.id, userObj)
// 		user.password = newPassword

// 	} catch (error) {

// 	}
// })



// function search(key, arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].email == key) {
// 			return arr[i];
// 		}
// 	}
// }