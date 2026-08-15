// Module ID: 13701
// Function ID: 13702
// Name: all
// Dependencies: [13699, 13673]

// Module 13701 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13673)[arg0];
    let tmp8;
    if (require(13699) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13673)[arg0];
    if (tmp3) {
      tmp3 = tmp(13673)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
