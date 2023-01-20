// steps
// 1. Define Scheme -> Note : id,userid, title , content , dateadded
//2. Create Model -> <model name> <Schema> Note
const mongoose = require('mongoose');
// 1st Step
const noteSchema = mongoose.Schema({
        id :{
            type : String,
            unique : true,
            required : true,
        },  
        userid: {
            type : String,
            required : true
        },  
        title: {
            type : String,
            required : true
        },  
        content: {
            type : String,
        },  
        dateadded:{
            type: Date,
            default: Date.now,
        }   
    });

    // 2nd Step
module.exports = mongoose.model("Notes",noteSchema);