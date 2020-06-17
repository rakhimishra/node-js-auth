var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user=[];
var bcrypt = require('bcrypt');

var iniatializepassport = require("./passportconfig");


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
    let {email,password} = req.body;
    let foundemail = user.find((user)=>{
        return user.email === email;
    })
    //find the email in the array if foud compare the password while signing up
    //if not found user error message
});
app.post("/register",async(req,res)=>{
    try{
    console.log(req.body);
    let hashpassword = await bcrypt.hash(req.body.password,10);
    let {name,email} = req.body
    //insert into database
    let foundemail = user.find((user)=>{
        return user.email === email;
    });
    if(foundemail){
        res.redirect("/register",{error:"already registeres"});
    }
    else{
    user.push({
        name,
        email,
        password: hashpassword
    });
    res.redirect("/login");
    }
}
    catch(error) {
        res.redirect("/register");
    }
});

app.listen(3004, function(){
    console.log("server running");
});