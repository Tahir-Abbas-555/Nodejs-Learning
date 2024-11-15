// models/Chat.js
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  chatid: { type: String, required: true },
  message: { type: String },
  botResponse: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);