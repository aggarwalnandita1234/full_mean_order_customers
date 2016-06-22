var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema(
		{name:String},
		{timestamps:true}
	);
// model style
mongoose.model('Customer', CustomerSchema);

// controller style
var Customer = mongoose.model('Customer');