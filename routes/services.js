const express=require('express');
const router=express.Router();
const serviesController=require('../controllers/services_controller');

router.get('/services', serviesController.services);

module.exports=router;
