// Module ID: 13531
// Function ID: 13532
// Name: all
// Dependencies: [13526, 13532]

// Module 13531 (all)

export default (arg0) => {
  if (require(13526) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13532)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
