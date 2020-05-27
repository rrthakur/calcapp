const express = require("express");
const path = require("path");


const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "calc.html"));
});
app.get("/calculator.css", function(req, res) {
    res.sendFile(path.join(__dirname, "calculator.css"));
  });
  
app.get("/calc.js", function(req, res) {
    res.sendFile(path.join(__dirname, "calc.js"));
  });  


app.use("/js", express.static("./js"));
app.use("/css", express.static("./css"));

app.listen(3000);
console.log("listening on http://localhost:3000");