// Module ID: 12793
// Function ID: 99530
// Name: compareBuild
// Dependencies: [12776]

// Module 12793 (compareBuild)

export default function compareBuild(arg0, arg1, arg2) {
  let tmp = require(12776) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12776) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2) || tmp.compareBuild(tmp2);
};
