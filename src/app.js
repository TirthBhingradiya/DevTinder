const express = require("express");
const { execArgv } = require("process");

const app = express();

console.log("start to the my new project");

// app.use((req, res) => {
//   res.send("hello from the server");
// });

app.use("/home", (req, res) => {
  res.send("tested successfully");
});

// app.use("/", (req, res) => {
//   res.send("home page successfully updated");
// });

//it is line by line execute it oreder is very very important
app.get("/user", (req, res) => {
  res.send("data successfully updated");
});
// app.get("/abc", (req, res) => {
//   res.send("data successfully updated or not ");
// });

app.get("/abc/:userid", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send("API fetched");
});
app.listen(3000, () => {
  console.log("server started successfully");
});
