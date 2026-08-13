// Module ID: 13666
// Function ID: 13667
// Name: all
// Dependencies: [13664, 13638]

// Module 13666 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13638)[arg0];
    let tmp8;
    if (require(13664) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13638)[arg0];
    if (tmp3) {
      tmp3 = tmp(13638)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
