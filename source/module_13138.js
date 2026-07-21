// Module ID: 13138
// Function ID: 99504
// Dependencies: []

// Module 13138

export default (arg0) => {
  if (require(dependencyMap[0])(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(dependencyMap[1])(arg0) + " is not a function");
    throw tmp6;
  }
};
