// packages.
const express = require("express");
const bodyParser = require("body-parser");
// port number.
const port = 3000;

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
// static css.
app.use(express.static("public"));

// setting ejs.
app.set("view engine", "ejs");

// instance variables
var items = ["Buy Food", "Eat Food", "Cook Food"];

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newItems: items,
  });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server is listing at : http://localhost:${port}`);
});
