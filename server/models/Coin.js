const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
  country: {
    type: String,
    default: ''
  },
  year: {
    type: Number,
    min: 0,
    max: 2018
  },
  coinType: String,
  purchasePrice: Number,
  deliveryPrice: Number,
  purchaseDate: Date,
  comments: String,
  photoUrls: [String]
})

module.exports = mongoose.model('Coin', CoinSchema);
