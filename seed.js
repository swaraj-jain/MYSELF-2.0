var mongoode=require("mongoose");
var discussion= require("./models/discussion");
var Comment =require("./models/comment");


function seedDB(){
    //remove all champground
    discussion.remove({},function(err){
        if(err){
            console.log("err")
        }
        console.log("remove data");
       
    });
    
}

module.exports = seedDB;