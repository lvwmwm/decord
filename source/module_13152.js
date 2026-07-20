// Module ID: 13152
// Function ID: 99524
// Dependencies: []

// Module 13152

export default (arg0) => {
  if (require(dependencyMap[0])(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
