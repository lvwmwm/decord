// Module ID: 13611
// Function ID: 13612
// Name: all
// Dependencies: [13606, 13612]

// Module 13611 (all)

export default (arg0) => {
  if (require(13606) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13612)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
