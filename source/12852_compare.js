// Module ID: 12852
// Function ID: 99972
// Name: compare
// Dependencies: [12838]

// Module 12852 (compare)

export default function compare(arg0, arg1, arg2) {
  let tmp = require(12838) /* SemVer */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12838) /* SemVer */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.compare(tmp2);
};
