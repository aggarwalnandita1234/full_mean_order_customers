  var customers = require('./../controllers/customers.js');
  var orders = require('./../controllers/orders.js'); 
  
  module.exports = function(app) {
  	app.get('/customers', function(req, res){
  		customers.index(req, res);
    });
  	app.post('/addCustomer', function(req, res){ 
  		customers.post(req, res);
  	});
  	app.post('/deleteCustomer', function(req, res){
  		console.log("body is", req.body.name);
  		customers.delete(req, res);
  	});

    app.get('/orders', function(req, res){
      orders.index(req, res);
    });
    app.post('/addOrder', function(req, res){
      orders.post(req, res);
    });
    app.post('/deleteOrder', function(req, res){
      console.log("body is", req.body.name);
      orders.delete(req, res);
    });
 }

