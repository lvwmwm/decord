// Module ID: 4259
// Function ID: 37338
// Name: baseIsSet
// Dependencies: []

// Module 4259 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = "[object Set]" == require(dependencyMap[1])(arg0);
  }
  return tmp;
};
