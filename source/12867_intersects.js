// Module ID: 12867
// Function ID: 99958
// Name: intersects
// Dependencies: [12856]

// Module 12867 (intersects)

export default function intersects(arg0, arg1, arg2) {
  let tmp = require(12856) /* Range */;
  tmp = new tmp(arg0, arg2);
  let tmp2 = require(12856) /* Range */;
  tmp2 = new tmp2(arg1, arg2);
  return tmp.intersects(tmp2, arg2);
};
