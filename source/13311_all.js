// Module ID: 13311
// Function ID: 102037
// Name: all
// Dependencies: [13309, 13283]

// Module 13311 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(13283) /* check */[arg0];
    let tmp10;
    if (require(13309) /* all */(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(13283) /* check */[arg0];
    if (tmp3) {
      tmp3 = require(13283) /* check */[arg0][arg1];
    }
  }
  return tmp3;
};
