var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user=[];
app.use(bodyParser());
app.set("view-engine","ejs");
app.get("/",(req,res) =>{
    res.render("index.ejs",{name:"vanshu"});
})

app.get("/login",(req,res) =>{
    res.render("login.ejs",{name:"vanshu"});
})

app.get("/register",(req,res) =>{
    res.render("register.ejs",{name:"vanshu"});
})
app.post("/login",(req,res) =>{
    
});
app.post("/register",(req,res)=>{
    console.log(req.body);
});

app.listen(3004, function(){
    console.log("server running");
});