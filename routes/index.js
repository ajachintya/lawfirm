const express=require('express');
const router=express.Router();

const homeContorller=require('../controllers/home_controller');
const aboutController=require('../controllers/about_controller');
const appointmentController=require('../controllers/appoint_controller');
const careerController=require('../controllers/career_controller');
const contactController=require('../controllers/contact_controller');
const ourteamController=require('../controllers/ourteam_controller');
const serviesController=require('../controllers/services_controller');

//console.log(`router loaded`);

router.get('/', homeContorller.home);
router.get('/about', aboutController.about);
router.get('/appointment', appointmentController.appointment);
router.get('/career', careerController.career);
router.get('/contact', contactController.contact);
router.get('/ourteam', ourteamController.team);
router.get('/services', serviesController.services);



// router.use('/about',require('./about'));
// router.use('/services',require('./services'));
// router.use('/career',require('./career'));
// router.use('/ourteam',require('./ourteam'));
// router.use('/appointment',require('./appointment'));
// router.use('/contact',require('./contact'));


module.exports=router;