const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
   logging: false
});


//HOTEL MODEL
var Hotel = db.define('hotels', {
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

//PLACE MODEL
var Place = db.define('place', {
	address: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
});

//ACTIVITIES MODEL
var Activities = db.define('activities', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});

//RESTAURANTS MODEL
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

//TABLES RELATIONS
Hotel.belongsTo(Place);
Restaurants.belongsTo(Place);
Activities.belongsTo(Place);

module.exports={
  db: db,
  Hotel: Hotel,
  Place: Place,
  Restaurants: Restaurants,
  Activities: Activities
}
