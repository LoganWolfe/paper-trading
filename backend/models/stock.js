const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
	ticker: {
		type: String,
		required: true,
	},

	quantity: {
		type: Number,
		required: true,
	},

	price: {
		type: Number,
		required: true,
	}

});

module.exports = mongoose.model('stocks', StockSchema);

