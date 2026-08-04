// Module ID: 13508
// Function ID: 13509
// Name: all
// Dependencies: [13503, 13509]

// Module 13508 (all)

export default (arg0) => {
  if (require(13503) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13509)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
