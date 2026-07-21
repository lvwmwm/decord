// Module ID: 604
// Function ID: 7038
// Name: baseIsArguments
// Dependencies: []

// Module 604 (baseIsArguments)

export default function baseIsArguments(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = "[object Arguments]" == require(dependencyMap[1])(arg0);
  }
  return tmp;
};
