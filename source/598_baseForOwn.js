// Module ID: 598
// Function ID: 7025
// Name: baseForOwn
// Dependencies: []

// Module 598 (baseForOwn)

export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = require(dependencyMap[0])(arg0, arg1, require(dependencyMap[1]));
    const tmp4 = require(dependencyMap[0]);
  }
  return tmp;
};
