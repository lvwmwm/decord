// Module ID: 13367
// Function ID: 102342
// Name: all
// Dependencies: [13365, 13339]

// Module 13367 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(13339) /* check */[arg0];
    let tmp10;
    if (require(13365) /* all */(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(13339) /* check */[arg0];
    if (tmp3) {
      tmp3 = require(13339) /* check */[arg0][arg1];
    }
  }
  return tmp3;
};
