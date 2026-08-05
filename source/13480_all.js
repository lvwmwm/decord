// Module ID: 13480
// Function ID: 13481
// Name: all
// Dependencies: [13475, 13481]

// Module 13480 (all)

export default (arg0) => {
  if (require(13475) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13481)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
