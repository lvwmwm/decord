// Module ID: 13509
// Function ID: 13510
// Name: all
// Dependencies: [13504, 13510]

// Module 13509 (all)

export default (arg0) => {
  if (require(13504) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13510)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
