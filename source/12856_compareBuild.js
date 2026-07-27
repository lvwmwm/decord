// Module ID: 12856
// Function ID: 99983
// Name: compareBuild
// Dependencies: [12839]

// Module 12856 (compareBuild)

export default function compareBuild(arg0, arg1, arg2) {
  let tmp = require(12839) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12839) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2) || tmp.compareBuild(tmp2);
};
