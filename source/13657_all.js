// Module ID: 13657
// Function ID: 13658
// Name: all
// Dependencies: [13655, 13629]

// Module 13657 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13629)[arg0];
    let tmp8;
    if (require(13655) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13629)[arg0];
    if (tmp3) {
      tmp3 = tmp(13629)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
