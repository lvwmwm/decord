// Module ID: 13598
// Function ID: 13599
// Name: all
// Dependencies: [13596, 13570]

// Module 13598 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13570)[arg0];
    let tmp8;
    if (require(13596) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13570)[arg0];
    if (tmp3) {
      tmp3 = tmp(13570)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
