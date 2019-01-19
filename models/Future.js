// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Future = sequelize.define("past", {
    climateVar: {
      type: DataType.STRING
    },
    fromYear: {
      type: DataType.INTEGER
    },
    toYear: {
      type: DataType.INTEGER
    },
    annualData: {
      type: DataType.INTEGER
    }
    ISO3future: {
      type: DataType.STRING
    }
  }, {
    timestamps: false
  });
  return Future;
};