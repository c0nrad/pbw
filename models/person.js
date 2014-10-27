var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  email: String,
  ts: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Person', PersonSchema);
