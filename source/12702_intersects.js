// Module ID: 12702
// Function ID: 97481
// Name: intersects
// Dependencies: []

// Module 12702 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(dependencyMap[0]);
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
