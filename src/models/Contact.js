const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    email: String,
    phone: String,
    message: String
})

module.exports = mongoose.model('contact', Contact)