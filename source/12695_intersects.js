// Module ID: 12695
// Function ID: 97448
// Name: intersects
// Dependencies: []

// Module 12695 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(dependencyMap[0]);
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
