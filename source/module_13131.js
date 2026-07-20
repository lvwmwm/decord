// Module ID: 13131
// Function ID: 99481
// Dependencies: []

// Module 13131

export default (arg0) => {
  if (require(dependencyMap[0])(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(dependencyMap[1])(arg0) + " is not a function");
    throw tmp6;
  }
};
