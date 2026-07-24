// Module ID: 12839
// Function ID: 99841
// Name: patch
// Dependencies: [12827]

// Module 12839 (patch)

export default function patch(arg0, arg1) {
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg1);
  return tmp.patch;
};
