var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema(
		{name:String,
		product: String,
		qty: Number},
		{timestamps:true}
)
var Order = mongoose.model('Order', OrderSchema);