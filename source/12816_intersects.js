// Module ID: 12816
// Function ID: 99637
// Name: intersects
// Dependencies: [12805]

// Module 12816 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(12805) /* Range */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12805) /* Range */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
