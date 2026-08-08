// Module ID: 13601
// Function ID: 13602
// Name: all
// Dependencies: [13596, 13602]

// Module 13601 (all)

export default (arg0) => {
  if (require(13596) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13602)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
