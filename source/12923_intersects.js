// Module ID: 12923
// Function ID: 100263
// Name: intersects
// Dependencies: [12912]

// Module 12923 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(12912) /* Range */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12912) /* Range */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
