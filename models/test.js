module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    code: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'tests',
    underscored: true,
    timestamps: false,
  });
};