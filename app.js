const express = require('express');
const app = express();
const models = require('./models/model');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models/model').db;
const nunjucks = require('nunjucks');



app.use(morgan('dev'));

//body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//public static
app.use(express.static('/public'));

app.use('/', routes);



//error handling middleware
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  console.error(err);
  res.send(err.status)
});

models.db.sync({})
  .then(function(){
    app.listen(3000 ,function(){
  console.log('Server listening on port 3000!');
    })
  })
  .catch(console.error);




