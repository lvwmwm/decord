// Module ID: 4255
// Function ID: 37274
// Name: baseIsSet
// Dependencies: []

// Module 4255 (baseIsSet)

export default function baseIsSet(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = "[object Set]" == require(dependencyMap[1])(arg0);
  }
  return tmp;
};
