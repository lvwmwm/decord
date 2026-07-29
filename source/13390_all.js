// Module ID: 13390
// Function ID: 13391
// Name: all
// Dependencies: [13388, 13362]

// Module 13390 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13362)[arg0];
    let tmp8;
    if (require(13388) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13362)[arg0];
    if (tmp3) {
      tmp3 = tmp(13362)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
