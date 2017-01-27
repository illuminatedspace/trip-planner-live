const router = require('express').Router();
const db = require('../models/model').db;
var Place = require('../models/model').Place;
var Hotel = require('../models/model').Hotel;
var Restaurant = require('../models/model').Restaurants;
var Activity = require('../models/model').Activities;
var Promise = require('bluebird');


router.get('/', function(req, res, next){
  var outerScopeContainer = {};


  var findingHotels = Hotel.findAll({})
                  .then(function(foundHotels){
                    return foundHotels;
                  }).catch(next)

  var findingRestaurants = Restaurant.findAll({})
                  .then(function(foundRestaurants){
                    return foundRestaurants
                  }).catch(next)
  var findingActivities = Activity.findAll({})
                  .then(function(foundActivities){
                    return foundActivities
                  }).catch(next)

  Promise.all([findingHotels, findingRestaurants, findingActivities])
    .spread(function(hotels, restaurants, activities){
      console.log(hotels)
      res.render('index', {
      hotels,
      restaurants,
      activities
      })
    }).catch(next)

  // Hotel.findAll({})
  // .then(function (dbHotels) {
  //   outerScopeContainer.dbHotels = dbHotels;
  //   //console.log(outerScopeContainer);
  //   return Restaurant.findAll();
  // })
  // .then(function (dbRestaurants) {
  //   //console.log(dbRestaurants)
  //   outerScopeContainer.dbRestaurants = dbRestaurants;
  //   return Activity.findAll();
  // })
  // .then(function (dbActivities) {
  //   // console.log(outerScopeContainer);
  //   res.render('index', {
  //     hotels: outerScopeContainer.dbHotels,
  //     restaurants: outerScopeContainer.dbRestaurants,
  //     activities: dbActivities
  //   });
  // })
  // .catch(next);

} )




module.exports = router;
