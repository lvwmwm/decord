// Module ID: 13603
// Function ID: 13604
// Name: all
// Dependencies: [13598, 13604]

// Module 13603 (all)

export default (arg0) => {
  if (require(13598) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13604)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
