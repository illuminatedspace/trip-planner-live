const Model = require('model');
const Place = require('Place');

var Activities = db.define('activities', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});

module.exports = Activities;