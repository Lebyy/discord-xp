const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  boost: { 
   enabledForeveryone: Boolean,
   Boost: Number
  }
  userID: { type: String },
  guildID: { type: String },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Levels', LevelSchema);
