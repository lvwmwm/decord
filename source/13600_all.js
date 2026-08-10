// Module ID: 13600
// Function ID: 13601
// Name: all
// Dependencies: [13598, 13572]

// Module 13600 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13572)[arg0];
    let tmp8;
    if (require(13598) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13572)[arg0];
    if (tmp3) {
      tmp3 = tmp(13572)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
