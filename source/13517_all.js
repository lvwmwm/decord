// Module ID: 13517
// Function ID: 13518
// Name: all
// Dependencies: [13512, 13518]

// Module 13517 (all)

export default (arg0) => {
  if (require(13512) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13518)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
