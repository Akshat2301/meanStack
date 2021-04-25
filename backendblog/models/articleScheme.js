var mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
    title: {
        type: String,
      },
      description: {
        type: String,
      },
      markdown: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('article',articleSchema);