// Module ID: 4640
// Function ID: 4641
// Name: reduce
// Dependencies: [599, 4641, 4642, 720, 601]

// Module 4640 (reduce)
import _mod599 from "module_599" /* 599 */;
import baseForOwn from "baseForOwn" /* 601 */;
import baseIteratee from "baseIteratee" /* 720 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod599(arg0)) {
    let tmpResult = tmp(4641);
  } else {
    tmpResult = tmp(4642);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
