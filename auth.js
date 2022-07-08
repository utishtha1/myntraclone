const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const token = crypto.randomBytes(64).toString('hex');


module.exports = function generateToken(obj) {
	return jwt.sign(obj, token)
}
module.exports = function authentication(req, res, next) {
	const authHeader = req.header['authorization']
	const authtoken = authHeader && authHeader.split('')[1]

	if (authtoken == null) return res.status(401).send("not authorized")

	jwt.verify(authtoken, token, (err, user) => {
		if (err) {
			res.status(401).send("not authorized")
		}
		req.user = user;
		next();
	})
}