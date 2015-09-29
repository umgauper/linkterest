'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
  owner: String,
  url: String,
  caption: String
});

module.exports = mongoose.model('Image', ImageSchema);
