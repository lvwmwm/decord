// Module ID: 12844
// Function ID: 99851
// Name: compareBuild
// Dependencies: [12827]

// Module 12844 (compareBuild)

export default function compareBuild(arg0, arg1, arg2) {
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12827) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2) || tmp.compareBuild(tmp2);
};
