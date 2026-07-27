// Module ID: 13323
// Function ID: 102169
// Name: all
// Dependencies: [13321, 13295]

// Module 13323 (all)

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp9 = require(13295) /* check */[arg0];
    let tmp10;
    if (require(13321) /* all */(tmp9)) {
      tmp10 = tmp9;
    }
    let tmp3 = tmp10;
  } else {
    tmp3 = require(13295) /* check */[arg0];
    if (tmp3) {
      tmp3 = require(13295) /* check */[arg0][arg1];
    }
  }
  return tmp3;
};
