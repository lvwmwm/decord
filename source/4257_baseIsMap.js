// Module ID: 4257
// Function ID: 37277
// Name: baseIsMap
// Dependencies: []

// Module 4257 (baseIsMap)

export default function baseIsMap(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = "[object Map]" == require(dependencyMap[1])(arg0);
  }
  return tmp;
};
