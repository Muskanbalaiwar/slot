const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Data = sequelize.define('Slot', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
   allowNull: false,
    primaryKey: true
  },
  date:{
    type:Sequelize.DATE,
allowNull:false,
    
  },
  startTime: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  endTime:{
    type: Sequelize.TIME,
    allowNull: false,   
  },
});

module.exports = Data;