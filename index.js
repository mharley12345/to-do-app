var express = require('express');
var todoController = require('./controllers/todoController');



var app = express();

//template engine
app.set('view engine','ejs');
//static files
app.use(express.static('./public'));
todoController(app);
//listening to port
app.listen(3000);
console.log('Listening to port 3000');