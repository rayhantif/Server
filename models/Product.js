const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    maxlength: 50
  },
  description: {
    type: String
  },
  location: {
    type: String
  },
  founder: {
    type: String,
    default: 'Unknown'
  },
  images: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: TimeRanges
  },
  views: {
    type: Number,
    default: 0
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
