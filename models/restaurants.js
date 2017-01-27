const Model = require('model');
const Place = require('Place');

var Restaurants = db.define('restaurants', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	}
});

module.exports = Restaurants;