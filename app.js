var express = require("express");
var app = express();
var request = require("request");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("search");
});

app.get("/results",function(req,res){
    var query = req.query.mvn;
   request("http://www.omdbapi.com/?s="+query+"&apikey=thewdb",(error,response,body)=>{
       if(!error&&response.statusCode===200){
           var data=JSON.parse(body);
           res.render("results",{data:data});
       }
   });
});




app.listen(3000,()=>{console.log("movie is running on port 3000");});