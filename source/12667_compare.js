// Module ID: 12667
// Function ID: 97313
// Name: compare
// Dependencies: []

// Module 12667 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(dependencyMap[0]);
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
