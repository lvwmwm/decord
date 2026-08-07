// Module ID: 13528
// Function ID: 13529
// Name: all
// Dependencies: [13526, 13500]

// Module 13528 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13500)[arg0];
    let tmp8;
    if (require(13526) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13500)[arg0];
    if (tmp3) {
      tmp3 = tmp(13500)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
