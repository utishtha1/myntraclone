const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/crmapp', (err)=>{

if(err){
	console.log('error while conecting')
}
console.log("connected")
});

module.exports= mongoose