const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/HRA");
console.log("DB connected");
const personSchema = new mongoose.Schema({
  Name_of_GP: String,
  Person_name: String,
  Person_age: Number,
  Person_Ph_no: Number,
  Caretaker_name: String,
  Caretaker_Ph_no: Number,
  Guardian_name: String,
  Ward_no: Number,
  House_no: Number,
  Gender: String,
  Address: String,
});

const Person = mongoose.model("Person", personSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  
  const Name_of_GP = req.body.nameOfGP;
  const Person_name = req.body.personName;
  const Person_age = req.body.personAge;
  const Person_Ph_no = req.body.personPhoneNo;
  const Caretaker_name = req.body.caretakerName;
  const Caretaker_Ph_no = req.body.caretakerPhoneno;
  const Guardian_name = req.body.guardianName;
  const Ward_no = req.body.wardNo;
  const House_no = req.body.houseNo;
  const Gender = req.body.gender;
  const Address = req.body.address;

  const person = new Person({
    Name_of_GP: Name_of_GP,
    Person_name: Person_name,
    Person_age: Person_age,
    Person_Ph_no: Person_Ph_no,
    Caretaker_name: Caretaker_name,
    Caretaker_Ph_no: Caretaker_Ph_no,
    Guardian_name: Guardian_name,
    Ward_no: Ward_no,
    House_no: House_no,
    Gender: Gender,
    Address: Address,
  });
  person.save();
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
