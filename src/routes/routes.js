const express = require('express')

const Detail = require('../models/Detail')
const Slider = require('../models/Slider')
const Works = require('../models/Works')
const Contact = require('../models/Contact')
const About = require('../models/About')

const router = new express.Router()  //The router variable is an instance of the express.Router class.


router.get('/', async(req, res) => {
   const details = await Detail.findOne({"_id": "636a03edea3bbd7a8c12d551"})
   const slides = await Slider.find()
    const works = await Works.find()
    const about = await About.find()
   //console.log(slides)
    res.render('index',{
        details:details,
        slides:slides,
        works:works,
        about:about
        
        
    });

   
    
})
router.get('/img', async(req, res) => {
    const details = await Detail.findOne({"_id": "636a03edea3bbd7a8c12d551"})
    res.render('img',{
        details:details
    })               
    })


router.post("/process-contact-form",async (request, response) => {
    console.log("form is submitted")
    console.log(request.body)
    //save the data to database
    try{
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
        
    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})

module.exports = router //The router variable is exported so that it can be used in other files.

