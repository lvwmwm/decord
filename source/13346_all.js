// Module ID: 13346
// Function ID: 102212
// Name: all
// Dependencies: [13319]

// Module 13346 (all)

export default (arg0) => {
  if (require(13319) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
