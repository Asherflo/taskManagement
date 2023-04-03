var express = require('express');
var mongoose = require('mongoose')
var ejs = require("ejs");
var bodyparser = require("body-parser"); 

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/taskmanagementDB")

const itemSchema= {
  name:String,

};
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({ name: "Welcome to ItBuddies" });
const item2 = new Item({ name: "Like, Share and Subscribe" });
const item3 = new Item({ name: "Enjoy learning" });

const d = [item1, item2, item3];

app.get("/", function (req, res) {
  res.render("list", { newListItem: i1 })
});

app.post ('/',(req,res)=>{
    i = req.body.n;
    i1.push(i)
    res.redirect("/")
 })

app.listen(3000,()=>{
    console.log("listening on port 3000")
});
