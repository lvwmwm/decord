// Module ID: 4877
// Function ID: 4878
// Name: reduce
// Dependencies: [514, 4878, 4879, 584, 516]

// Module 4877 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4878);
  } else {
    tmpResult = tmp(4879);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
