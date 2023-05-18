const express = require('express');
const app = express();
const port = process.env.PORT|8000
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded());

app.use('/',require('./routes/api/v1/index'));

app.listen(port,function(error){
    if(error){
        console.log(`Error in running server: ${error}`);
    }
    console.log(`Yepp!! Server is running on port: ${port}`);
})
