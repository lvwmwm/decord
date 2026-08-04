// Module ID: 13506
// Function ID: 13507
// Name: all
// Dependencies: [13504, 13478]

// Module 13506 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13478)[arg0];
    let tmp8;
    if (require(13504) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13478)[arg0];
    if (tmp3) {
      tmp3 = tmp(13478)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
