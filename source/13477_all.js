// Module ID: 13477
// Function ID: 13478
// Name: all
// Dependencies: [13475, 13449]

// Module 13477 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13449)[arg0];
    let tmp8;
    if (require(13475) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13449)[arg0];
    if (tmp3) {
      tmp3 = tmp(13449)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
