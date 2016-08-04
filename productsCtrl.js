var app = require('./server');

var db = app.get('db');


// methods here for the db calls
module.exports = {
    createProduct: function(req, res, next) {
        db.create_product(function(err, products) {
          console.log(err, products);
          console.log('CREATE products sighting');
          res.json(products);
        });
    },
    readProducts: function(req, res, next) {
        db.read_products(function(err, products) {
          console.log(err, products);
          console.log('GET ALL products sighting');
          res.json(products);
        });
    },
    readProduct: function(req, res, next) {
        db.read_product([req.params.productId], function(err, product) {
          console.log(err, product);
          console.log('GET ONE product sighting');
          res.json(product);
        });
    },
    updateProduct: function(req, res, next) {
      db.update_product([req.body.description, req.params.productId], function(err,product){
        console.log(err, product);
        console.log('UPDATE product sighting');
        res.json(product);
      });
    },
    deleteProduct: function(req, res, next) {
      db.delete_product([req.params.productId], function(err, product) {
        console.log(err, product);
        console.log('DELETE product sighting');
        res.json(product);
      });
    }
};
