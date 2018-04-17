var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/add", function(req, res){
    res.render("add");
});

app.get("/users", function(req, res){
    res.render("users");
});

app.listen(port, function(){
    console.log("App listening on port: " + port);
});