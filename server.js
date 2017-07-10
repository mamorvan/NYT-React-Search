var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

var PORT = process.env.PORT || 8080;

//middleware set-up
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

//Routes (replace with react router later)
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
    console.log("server.js 65 - App listening on PORT: ", PORT);
});


