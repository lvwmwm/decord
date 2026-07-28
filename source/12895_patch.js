// Module ID: 12895
// Function ID: 100146
// Name: patch
// Dependencies: [12883]

// Module 12895 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(12883) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
