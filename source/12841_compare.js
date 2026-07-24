// Module ID: 12841
// Function ID: 99845
// Name: compare
// Dependencies: [12827]

// Module 12841 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12827) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
