const express=require('express');
const router=express.Router();

const homeContorller=require('../controllers/home_controller');

//console.log(`router loaded`);

router.get('/', homeContorller.home);
module.exports=router;