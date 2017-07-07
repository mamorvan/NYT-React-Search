var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Saved = require("./models/Saved");

var app = express();

var PORT = process.env.PORT || 8080;

//middleware set-up
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

//Database set-up
mongoose.connect();
var db = mongoose.connection;

db.on("error", function(err){
    console.log("server.js 25: Mongoose error", err);
});

db.once("open", function() {
    console.log("server.js 29: Mongoose connection successsful");
});

//Routes (replace with react router later)
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {
    Saved.find({}).exec(function(err, doc){
        if (err) {
            console.log("server.js 42: get route error", err);
        } else {
            res.send(doc);
        }
    });
});

app.post("/api", function(req, res){
    console.log("server.js 50: app.post req.body", req.body);
    Saved.create({
        title: req.body.title,
        date: req.body.date,
        url: req.body.url
    }, function(err) {
        if (err) {
            console.log("server.js 57: app.post create Saved error", err);
        } else {
            res.send("Article has been saved");
        }
    });
});

app.listen(PORT, function() {
    console.log("server.js 65 - App listening on PORT: ", PORT);
});


