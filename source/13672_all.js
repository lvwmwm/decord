// Module ID: 13672
// Function ID: 13673
// Name: all
// Dependencies: [13667, 13673]

// Module 13672 (all)

export default (arg0) => {
  if (require(13667) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13673)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
