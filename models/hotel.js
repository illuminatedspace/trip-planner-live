const Model = require('model');
const Place = require('Place');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
  	type: Sequelize.FLOAT
  },
  amenities: {
  	type: Sequelize.STRING
  }
});

Hotel.belongsTo(Place);

module.exports = Hotel;