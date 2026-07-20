// Module ID: 12658
// Function ID: 97286
// Name: patch
// Dependencies: []

// Module 12658 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
