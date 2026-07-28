// Module ID: 12897
// Function ID: 100150
// Name: compare
// Dependencies: [12883]

// Module 12897 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(12883) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12883) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
