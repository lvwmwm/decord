// Module ID: 13258
// Function ID: 101710
// Name: all
// Dependencies: [13256, 13230]

// Module 13258 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(13230) /* check */[arg0];
    let tmp10;
    if (require(13256) /* all */(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(13230) /* check */[arg0];
    if (tmp3) {
      tmp3 = require(13230) /* check */[arg0][arg1];
    }
  }
  return tmp3;
};
