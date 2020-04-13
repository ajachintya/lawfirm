const express = require('express');
const app=express();
const port=8080;

const db=require('./config/mongoose');

//use express router
app.use('/',require('./routes/index'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware to use static files like .css
app.use(express.static('assets'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port ${port}`);
});