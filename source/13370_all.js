// Module ID: 13370
// Function ID: 102347
// Name: all
// Dependencies: [13365, 13371]

// Module 13370 (all)

export default (arg0) => {
  if (require(13365) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(13371)(arg0) + " is not a function");
    throw tmp6;
  }
};
