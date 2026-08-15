// Module ID: 13704
// Function ID: 13705
// Name: all
// Dependencies: [13699, 13705]

// Module 13704 (all)

export default (arg0) => {
  if (require(13699) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13705)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
