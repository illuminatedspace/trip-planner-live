const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  }
})






module.exports={
  db: db,
  Hotel: Hotel
}
