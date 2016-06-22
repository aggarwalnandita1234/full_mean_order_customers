  var mongoose = require('mongoose');
  var Order = mongoose.model('Order');

  module.exports = (function(app) {
  	return{
  		index: function(req, res){
  			Order.find({}, function(err, orders){
	  			if(err){
	  				console.log(err);
	  			} else {
	  				res.json(orders);
	  			}
  			});
  		},
      post: function(req, res) {

        var order = new Order({name: req.body.customer, product: req.body.product, qty: req.body.qty});
        order.save(function(err, orders){
          if(err){
            console.log(err)
          } else{
            console.log('Data saved successfully');
              res.json(orders);
               
              }
      })
        },
      delete: function(req, res) {

        Order.find({name:req.body.name},function(err,orders){
            Order.remove({name:req.body.name},function(err, orders){
             res.json(orders);
                  
    });
  });
        
      },
    }
  })();