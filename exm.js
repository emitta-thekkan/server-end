const mysql=require("mysql");
var express=require("express");
var app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'tbl_vehicle'
});

var data=[];
connection.connect();

app.get("/",function(req,res){
    connection.query("select * from vehicle",function(err,result){
        if(err==null){

            console.log("cyrcyvyug");

            data=result;
            res.contentType("application/json");
            res.send(JSON.stringify(data));
        }
        else{
            res.send("something went wrong");
        }
    });
});

app.put("/:vehicleno",function(req,res){

    let eno=parseInt(req.body.vehicleno);
    let ename=req.body.vehiclename;
    let ecompany=req.body.company;
    let etype=req.body.type;
    let eprice=req.body.price;
    let edescription=req.body.description;
    let query=`update vehicle set vehiclename= '${ename}',comapny='${ecompany}',type='${etype}',price='${eprice}',description='${edescription}' where no= ${eno}`;
    connection.query(query,function(err,result){

        if(err==null){

            data=result;
            res.contentType("application/json");
            res.send(JSON.stringify(data));
        }
        else{
            res.contentType("application/json");
            res.send("something went wrong");
        }
        
    })
})
module.exports=app;