// Module ID: 12667
// Function ID: 97331
// Name: patch
// Dependencies: [1862271025]

// Module 12667 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
