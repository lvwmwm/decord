// Module ID: 4966
// Function ID: 4967
// Name: reduce
// Dependencies: [514, 4967, 4968, 584, 516]

// Module 4966 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4967);
  } else {
    tmpResult = tmp(4968);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
