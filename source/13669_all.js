// Module ID: 13669
// Function ID: 13670
// Name: all
// Dependencies: [13664, 13670]

// Module 13669 (all)

export default (arg0) => {
  if (require(13664) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13670)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
