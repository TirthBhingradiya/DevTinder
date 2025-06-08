const userAuth = (req, res, next) => {
  const token = "abc";
  console.log("admin is calling");
  const isAuthorized = token === "abac";
  if (!isAuthorized) {
    res.status(401).send("unauthorized request");
  } else {
    next();
  }
};
module.exports = {
  userAuth,
};
