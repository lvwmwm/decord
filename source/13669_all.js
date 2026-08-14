// Module ID: 13669
// Function ID: 13670
// Name: all
// Dependencies: [13667, 13641]

// Module 13669 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13641)[arg0];
    let tmp8;
    if (require(13667) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13641)[arg0];
    if (tmp3) {
      tmp3 = tmp(13641)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
