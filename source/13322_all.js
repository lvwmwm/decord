// Module ID: 13322
// Function ID: 102164
// Name: all
// Dependencies: [13320, 13294]

// Module 13322 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(13294) /* check */[arg0];
    let tmp10;
    if (require(13320) /* all */(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(13294) /* check */[arg0];
    if (tmp3) {
      tmp3 = require(13294) /* check */[arg0][arg1];
    }
  }
  return tmp3;
};
