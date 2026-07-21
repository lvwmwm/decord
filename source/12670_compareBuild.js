// Module ID: 12670
// Function ID: 97319
// Name: compareBuild
// Dependencies: []

// Module 12670 (compareBuild)

export default function compareBuild(arg0, arg1, arg2) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(dependencyMap[0]);
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2) || tmp.compareBuild(tmp2);
};
