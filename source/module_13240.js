// Module ID: 13240
// Function ID: 101677
// Dependencies: [13241]

// Module 13240

export default (arg0) => {
  if (require(13241)(arg0)) {
    const prototype = TypeError.prototype;
    const tmp4 = new TypeError("Can't call method on " + arg0);
    throw tmp4;
  } else {
    return arg0;
  }
};
