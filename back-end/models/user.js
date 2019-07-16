let mongoose = require('mongoose')
const User = mongoose.model('User', {
    name: { type: String, index: true, required: true, unique: true },
    pass: { type: String, required: true },
    email: { type: String, unique: true },
    token: String
});
module.exports = User;