// Module ID: 12855
// Function ID: 99978
// Name: compareBuild
// Dependencies: [12838]

// Module 12855 (compareBuild)

export default function compareBuild(arg0, arg1, arg2) {
  let tmp = require(12838) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12838) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2) || tmp.compareBuild(tmp2);
};
