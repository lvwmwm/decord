// Module ID: 7463
// Function ID: 59934
// Name: baseRest
// Dependencies: []

// Module 7463 (baseRest)

export default function baseRest(arg0, arg1) {
  const tmp = require(dependencyMap[0]);
  return tmp(require(dependencyMap[1])(arg0, arg1, require(dependencyMap[2])), "" + arg0);
};
