const express = require('express');
const mongodb = require('./connection');

const app = express();
const router = express.Router();
const crypto = require('crypto');
const Auth = require('./auth');
const ProductController = require("./controller/productController");
const UserController = require("./controller/userController");



app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send(userObj)
})

app.get("/homePage", UserController.homepage);
app.post("/addProduct", ProductController.addProduct);
app.get("/productsList", ProductController.productsList);
app.get("/productDetail/:id", ProductController.productDetail);

// app
//     .route(
//       "/:url(api|auth|components|app|bower_components|assets|lib|styles)/*"
//     )
//     .get(errors[404]);
// // All other routes should redirect to the index.html
// app.route('/*').get((req, res) => {
// 	res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
// });

app.listen(3000, function () {
	console.log("server started at 3000")
})




