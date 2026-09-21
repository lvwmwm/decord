// Module ID: 4879
// Function ID: 4880
// Name: reduce
// Dependencies: [514, 4880, 4881, 588, 516]

// Module 4879 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 588 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4880);
  } else {
    tmpResult = tmp(4881);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
