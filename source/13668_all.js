// Module ID: 13668
// Function ID: 13669
// Name: all
// Dependencies: [13663, 13669]

// Module 13668 (all)

export default (arg0) => {
  if (require(13663) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(tmp(13669)(arg0) + " is not a function");
    throw tmp6;
  }
  tmp = require;
};
