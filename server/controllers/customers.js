  var mongoose = require('mongoose');
  var Customer = mongoose.model('Customer');

  module.exports = (function(app) {
  	return{
  		index: function(req, res){
  			Customer.find({}, function(err, customers){
	  			if(err){
	  				console.log(err);
	  			} else {
	  				res.json(customers);
	  			}
  			});
  		},
      post: function(req, res) {
        Customer.find({}, function(err, customers){
          for (index in customers){
            if (customers[index].name == req.body.name){
              console.log("user already exist")
              res.redirect('/');
            }
            else{
            var customer = new Customer({name: req.body.name});
            customer.save(function(err){
              if(err){
                console.log(err)
              } else{
                console.log('Data saved successfully');
                  res.redirect('/');
                   
                  }
          })
                }
          }
        });


      },
      delete: function(req, res) {

        Customer.find({name:req.body.name},function(err,customers){
            Customer.remove({name:req.body.name},function(err, customers){
             res.json(customers);
                  
    });
  });
        
      },
  	}
  })();