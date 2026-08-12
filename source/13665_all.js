// Module ID: 13665
// Function ID: 13666
// Name: all
// Dependencies: [13663, 13637]

// Module 13665 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = require(13637)[arg0];
    let tmp8;
    if (require(13663) /* all */(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = require(13637)[arg0];
    if (tmp3) {
      tmp3 = tmp(13637)[arg0][arg1];
    }
    tmp = require;
  }
  return tmp3;
};
