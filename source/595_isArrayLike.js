// Module ID: 595
// Function ID: 7019
// Name: isArrayLike
// Dependencies: []

// Module 595 (isArrayLike)

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require(dependencyMap[0])(arg0.length);
  }
  if (tmp) {
    tmp = !require(dependencyMap[1])(arg0);
  }
  return tmp;
};
