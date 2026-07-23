// Module ID: 12790
// Function ID: 99524
// Name: compare
// Dependencies: [12776]

// Module 12790 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(12776) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12776) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
