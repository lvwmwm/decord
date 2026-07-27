// Module ID: 12853
// Function ID: 99977
// Name: compare
// Dependencies: [12839]

// Module 12853 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(12839) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12839) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
