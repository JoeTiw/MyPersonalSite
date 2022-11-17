const mongoose = require('mongoose');

const Works = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkText: String,
    link: String

})

module.exports = mongoose.model('works', Works);