// Module ID: 13608
// Function ID: 13609
// Name: all
// Dependencies: [13606, 13580]

// Module 13608 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13580)[arg0];
    let tmp8;
    if (require(13606) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13580)[arg0];
    if (tmp3) {
      tmp3 = tmp(13580)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
