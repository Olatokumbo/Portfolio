const express = require("express");
const ejs=require("ejs");
const app=express();
const bodyParser=require("body-parser");
const sendMail=require("./mail");
const port=8000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
res.render("index");
});

app.post("/", function(req, res){
    // res.send("HELLO World");
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);
    sendMail(req.body.email, req.body.name, req.body.message, function(err, data){
        if(err)
        res.status(500).json({message: "Internal Error"});
        else
        res.json({message: "Email Sent!!"});
    });
});
app.listen(process.env.port||port, function(req, res){
    console.log("Listening at Port 8000");
});