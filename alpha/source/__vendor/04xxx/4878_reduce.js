// Module ID: 4878
// Function ID: 4879
// Name: reduce
// Dependencies: [514, 4879, 4880, 584, 516]

// Module 4878 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4879);
  } else {
    tmpResult = tmp(4880);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
