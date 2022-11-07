// Initialization
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./Model/Note');


const bodyParser = require('body-parser');
const router = require('./Routes/Note');
app.use(bodyParser.urlencoded({extended: false})); // If extended true then Nested Objects are Correct 
app.use(bodyParser.json());                        //  or if false then nested objetcs are incorrect cant send only normal objects can be send 

const mongoDBPath = "mongodb+srv://Shivam:Shivam@cluster0.cya5ois.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBPath).then(
    function(){
  // App Routes
app.get("/",function(req,res){
   const response = {statuscode: res.statusCode,message : "API Works!"};
   res.json(response);
});
const noteRouter = require('./Routes/Note');
app.use('/notes',noteRouter);


}
);

//Starting the server on a Port
const PORT = process.env.PORT || 5000; 
app.listen(PORT ,function(){
    console.log("Server started at port : " + PORT);
});



