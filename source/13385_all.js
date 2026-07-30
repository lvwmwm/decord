// Module ID: 13385
// Function ID: 13386
// Name: all
// Dependencies: [13383, 13357]

// Module 13385 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13357)[arg0];
    let tmp8;
    if (require(13383) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13357)[arg0];
    if (tmp3) {
      tmp3 = tmp(13357)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
