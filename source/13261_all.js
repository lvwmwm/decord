// Module ID: 13261
// Function ID: 101715
// Name: all
// Dependencies: [13256, 13262]

// Module 13261 (all)

export default (arg0) => {
  if (require(13256) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(13262)(arg0) + " is not a function");
    throw tmp6;
  }
};
