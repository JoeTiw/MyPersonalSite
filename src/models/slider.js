const mongoose=require('mongoose')

const Slider = mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    class: String
  
});

module.exports = mongoose.model('slider', Slider)