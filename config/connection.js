const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = !process.env.JAWSDB_URL
? new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.HOST,
  dialect: 'mysql',
  logging: false,
  port: 3306
})
  : new Sequelize(process.env.JAWSDB_URL)
  

module.exports = sequelize;