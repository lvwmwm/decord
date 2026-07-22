// Module ID: 4261
// Function ID: 37341
// Name: baseIsMap
// Dependencies: []

// Module 4261 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = "[object Map]" == require(dependencyMap[1])(arg0);
  }
  return tmp;
};
