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

const { userAuth } = require("./middleware/auth");

app.get("/user", userAuth, (req, res) => {
  res.send("user data send this package");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/getAllUserData", (req, res, next) => {
  try {
    throw new Error("Error occur");
    res.send("user send the data");
  } catch (err) {
    res.status(500).send("Some error will be occur ");
  }
});
// app.use("/", (req, res) => {
//   res.send("home page successfully updated");
// });

//it is line by line execute it oreder is very very important
// app.get("/user", (req, res) => {
//   res.send("data successfully updated");
// });
// app.get("/abc", (req, res) => {
//   res.send("data successfully updated or not ");
// });

// app.get("/abc/:userid", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   res.send("API fetched");
// });

// app.get(
//   "/",
//   (req, res) => {
//     res.send("message updated successfully");
//   },
//   (req, res) => {
//     res.send("2nd response");
//   }
// );

// in this only first message it will be show it not the get method will be run and show it.

// app.get(
//   "/",
//   (req, res, next) => {
//     // res.send("message updated successfully");
//     next();
//   },
//   (req, res) => {
//     res.send("2nd response");
//   }
// );

// if will use the next() so they next function call it .

// app.get(
//   "/",
//   (req, res, next) => {
//     res.send("message updated successfully");
//     next();
//   },
//   (req, res) => {
//     res.send("2nd response");
//   }
// );

// if i have this type code write so they come be the error because "they are one request already sent to the client".

// app.get(
//   "/",
//   (req, res, next) => {
//     next();
//     res.send("message updated successfully");
//   },
//   (req, res) => {
//     res.send("2nd response");
//   }
// );

// if i had code this type so they are response of the client is "2nd reponse " because express js fetch the request sent to the response and they are same error occur for the previouslu show it.

/// handle the middleware

// app.use("/admin", (req, res, next) => {
//   const token = "abc";
//   console.log("admin is calling");
//   const isAuthorized = token === "abc";
//   if (!isAuthorized) {
//     res.status(401).send("unauthorized request");
//   } else {
//     next();
//   }
// });

app.get("/admin/getAllData", (req, res) => {
  res.send("send the all data");
});
app.listen(3000, () => {
  console.log("server started successfully");
});
