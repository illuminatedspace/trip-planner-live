const router = require('express').Router();
const db = require('../models/model').db;
var Place = require('../models/model').Place;
var Hotel = require('../models/model').Hotel;
var Restaurant = require('../models/model').Restaurants;
var Activity = require('../models/model').Activities;


router.get('/', function(req, res, next){
  var outerScopeContainer = {};
  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);

} )




module.exports = router;
