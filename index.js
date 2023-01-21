const express = require("express");
const app = express();
const fs = require("fs");

// const workers = [
//     {id: 1, name: "Fuad", age: 28},
//     {id: 2, name: "Azer", age: 25},
//     {id: 3, name: "Nurlan", age: 15},
// ]

let employeesData = JSON.parse(fs.readFileSync("employees.json"));

app.get("/", (request, response) => {
  response.send(employeesData);
});

app.get("/about", () => {
  console.log("About Employees");
});

app.listen(3000, () => {
  console.log("3000 is using");
});
