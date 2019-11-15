var express = require("express");
var exmobj=require("./exm");
var obj=express();



obj.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



obj.use(express.json());
obj.use("/vehicles",exmobj);

obj.listen(3537, function(){
    console.log("Server Started on port  " + 3537 );
})

