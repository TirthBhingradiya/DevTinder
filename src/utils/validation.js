const validator = require("validator");

const validationSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName) {
    throw new Error("Name is not valid");
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error("FirstName will be 4-50 character");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("email is not valid");
  }
};
module.exports = { validationSignUpData };
