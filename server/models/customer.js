var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
		name:String,
		created_at  :{ type: Date, default: Date.now }
		
	});
// model style
mongoose.model('Customer', CustomerSchema);

// controller style
var Customer = mongoose.model('Customer');