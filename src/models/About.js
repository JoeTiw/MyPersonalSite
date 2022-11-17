const mongoose = require('mongoose')

const About = mongoose.Schema({
    title: String,
    subTitile: String,
    image: String,
    description: String,
    profile: String,
    profileDiscription: String,
    profileMail: String,
    skills: String,
    skillDiscription: String,
    resume: String,

});

module.exports = mongoose.model('about', About) 