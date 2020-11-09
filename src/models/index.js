const path = require('path');
const Sequelize = require('sequelize');

const config = require('module/config.js');
const db = {};

const sequelize = new Sequelize(config.data('database'), config.data('username'), config.data('password'), config.all_data());

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Test = require('./test')(sequelize, Sequelize);

module.exports = db;
