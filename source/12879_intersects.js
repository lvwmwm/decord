// Module ID: 12879
// Function ID: 100090
// Name: intersects
// Dependencies: [12868]

// Module 12879 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(12868) /* Range */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12868) /* Range */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
