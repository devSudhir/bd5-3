let { sequelize, DataTypes } = require('../lib/index');

let movieModel = sequelize.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  director: DataTypes.STRING,
  genre: DataTypes.STRING,
  release_year: DataTypes.INTEGER,
  rating: DataTypes.FLOAT,
  actor: DataTypes.STRING,
  box_office_collection: DataTypes.INTEGER,
});

module.exports = { movieModel };
