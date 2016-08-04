var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://michaellecke@localhost/week6day3';

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

var databaseObject = massive.connectSync({connectionString: connectionString});
app.set('db', databaseObject); // get this back out in controller
var controller = require('./productsCtrl.js'); // must come after app.set db

// console.log(app.get('db'));

//ENDPOINTS
//GET
app.get('/products', controller.readProducts);
app.get('/products/:productId', controller.readProduct);
// POST
app.post('/products/create', controller.createProduct);
//PUT
app.put('/products/:productId', controller.updateProduct) // fix to handle query param
// DELETE
app.delete('/products/:productId', controller.deleteProduct)

// LISTENER
var port = 3000;
app.listen(port, function(){
  console.log('Listening on port 3000');
});
