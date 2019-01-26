// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
var sequelize = require('../config/connection.js');

// Creates a "Chirp" model that matches up with DB
var Climate = sequelize.define("climate", {
	ISO3: Sequelize.STRING,
	temperature: Sequelize.STRING,
	precipitation: Sequelize.STRING,
	created_at: Sequelize.DATE
});

// Syncs with DB
Climate.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Climate;