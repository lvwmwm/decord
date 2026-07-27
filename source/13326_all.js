// Module ID: 13326
// Function ID: 102174
// Name: all
// Dependencies: [13321, 13327]

// Module 13326 (all)

export default (arg0) => {
  if (require(13321) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(13327)(arg0) + " is not a function");
    throw tmp6;
  }
};
