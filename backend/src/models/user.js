const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Old (Deprecated)
// UserSchema.ensureIndex({ username: 1 });

// New (Correct)
UserSchema.index({ username: 1 });
// User.createIndexes();

const User = mongoose.model('User', UserSchema);
module.exports = User;
