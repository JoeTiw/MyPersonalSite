const express = require('express')
const hbs = require('hbs')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')  //The router variable is imported from the routes file.
const Detail = require('./models/Detail') //The Detail variable is imported from the models file.
const Slider = require('./models/Slider') //The Slider variable is imported from the models file.
const Works = require('./models/Works') //The Works variable is imported from the models file.
const About = require('./models/About')

app.use(bodyParser.urlencoded({ 
  extended: true
}))     
app.use('/static',express.static('public'))          //The public folder is used to serve static files.
app.use('', router)   
  

app.set('view engine', 'hbs')               //The view engine is set to hbs.
app.set('views','views')                   //The views folder is set to the views folder.
hbs.registerPartials('views/partials')      //The partials folder is set to the views/partials folder.

//db connection
mongoose.connect('mongodb://localhost/personal_website', ()=>{
    console.log('Connected to the database')

    // About.create([
    //   {
    //     title: 'About Me',
    //     subTitile: 'Let me introduce myself',
    //     image: '/static/images/bhupin.jpg',
    //     description: 'Equipped with a strong foundation in software engineering and programming principles across multiple platforms. Currently pursuing B.A. in Software Engineering with a 3.6 GPA from the University of Wisconsin Green-Bay and equipped with a High School Diploma in Computer Science from Appleton East High School and Tesla Engineering Charter School. Able to develop, test, and debug code while designing interfaces and administering systems. Proven success in quickly learning and mastering new technologies. Seeking an internship position/full-time for exploring career options in the IT sector.',
    //     profile: 'Profile',
    //     profileDiscription: 'Currently I am looking for a job, I am open to a new software engineering/product/startup opportunities. If you think I am a good fit, please contact me via',
    //     profileMail:'bhupintiwari@gmail.com',
    //     skills: 'Skills',
    //     skillDiscription: 'I demonstrate expertise in leveraging leadership skills for coaching and mentoring team members to accomplish all targeted objectives on time. I also excel in enduring productive relations when team members, clients, and key stakeholders by using strong interpersonal capabilities. My areas of expertise are computer science, Information technology. Below are highlights of my technical skills:',
    //     resume: '/static/images/resume.pdf'

    //   }



    // ])

    // Works.create([
    //     {
    //   icon:'fa-brands fa-java',
    //   title:'Java',
    //   description:'Check out my Java projects',
    //   linkText:'https://github.com/JoeTiw',
    //   link:'Click'
    //     },
    //     {
    //       icon:'fa-brands fa-python"',
    //       title:'Python',
    //       description:'I love ML',
    //       linkText:'https://github.com/JoeTiw',
    //       link:'Click'
    //         },
    //         {
    //           icon:'fa-brands fa-js',
    //           title:'JavaScript',
    //           description:'Tough but fun',
    //           linkText:'https://github.com/JoeTiw',
    //           link:'Click'
    //             },
      
    //   ])


    // Slider.create([
    //   {
    //     title: 'Born and raised in Nepal',
    //     description: 'It all started in Nepal',
    //     imageUrl: 'static/images/firstnep1.jpg'

    //   },

    //   {
    //     title: 'My first OS',
    //     description: 'Windows xp and NFS(Need for Speed)',
    //     imageUrl: 'static/images/windowspic.jpg'

    //   },

    //   {
    //     title: 'Wisconsin',
    //     description: 'Moved to Wisconsin in 2012',
    //     imageUrl: 'static/images/wiscimg.jpg'

    //   },

    //   {
    //     title: 'Programming',
    //     description: 'My love for programming is what brought me here',
    //     imageUrl: 'static/images/programmingimg.jpg'

    //   },


    // ])
//     Detail.create({

//         name: 'Bhupin Tiwari',
//         iconUrl: 'https://cdn-icons-png.flaticon.com/512/5024/5024509.png',
//         links:[
//           {

//             label: 'Home',
//             url: '/'
//           },
//           {
//             label: 'Works',
//             url: '/works'
//           },
//           {
//             label:'Img',
//             url: '/img'
//           },
//           {
//             label:'About Me',
//             url: '/about-me'
//           },
//           {
//             label:'Portfolio',
//             url: '/portfolio'
//           },
//           {
//             label:'Contact Me',
//             url: '/contact-me'
//           },

//         ],
//     })
 })

app.listen(process.env.PORT | 3000, () => {
  console.log('Server is up on port 3000.')
})
