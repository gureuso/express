const path = require('path');
const Sequelize = require('sequelize');

const config = require(path.join(__dirname, '..', 'config.json'))["production"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Test = require('./test')(sequelize, Sequelize);

module.exports = db;