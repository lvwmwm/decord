// Module ID: 13514
// Function ID: 13515
// Name: all
// Dependencies: [13512, 13486]

// Module 13514 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13486)[arg0];
    let tmp8;
    if (require(13512) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13486)[arg0];
    if (tmp3) {
      tmp3 = tmp(13486)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
