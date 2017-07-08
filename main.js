//load modules
var express = require('express');
var mysql = require('mysql');
var fs = require('fs');

//app
var app = express();

//bestand locatie
var bestandLocatie = require(__dirname + "/BestandLocatie.js");
bestandLocatie.fileLocationInstall();

//server is running on poort
app.listen(8090, function(){
    console.log("Server is running");
});