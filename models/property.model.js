const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = Schema({
  description: String,
  slug: String,
  type: String,
  price: String,
  currency: {
    type: String,
    enum: ['ARS', 'USD']
  }, 
  photo : String, 
  featured: Boolean,
  sector: {
    type: String,
    enum: ['Banda Norte', 'Castelli', 'Centro', 'Bimaco', 'Macro Centro']
  }
});

const propertyModel = mongoose.model('properties', PropertySchema);

module.exports = propertyModel;
