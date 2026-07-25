// Module ID: 12878
// Function ID: 100085
// Name: intersects
// Dependencies: [12867]

// Module 12878 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(12867) /* Range */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12867) /* Range */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
