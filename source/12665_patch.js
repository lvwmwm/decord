// Module ID: 12665
// Function ID: 97309
// Name: patch
// Dependencies: []

// Module 12665 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
