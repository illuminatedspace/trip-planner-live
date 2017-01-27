const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});
const Hotel = require('hotel');
const Activity = require('activity');
const Place = require('place');
const Restaurants = require('restaurants');



// Restaurants.belongsTo(Place);
// Activities.belongsTo(Place);


module.exports={
  db: db,
  Hotel: Hotel,
  Place: Place,
  Restaurants: Restaurants,
  Activities: Activities
}
