// Module ID: 13660
// Function ID: 13661
// Name: all
// Dependencies: [13655, 13661]

// Module 13660 (all)

export default (arg0) => {
  if (require(13655) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13661)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
