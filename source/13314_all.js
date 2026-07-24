// Module ID: 13314
// Function ID: 102042
// Name: all
// Dependencies: [13309, 13315]

// Module 13314 (all)

export default (arg0) => {
  if (require(13309) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(13315)(arg0) + " is not a function");
    throw tmp6;
  }
};
