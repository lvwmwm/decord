// Module ID: 4609
// Function ID: 4610
// Name: reduce
// Dependencies: [599, 4610, 4611, 720, 601]

// Module 4609 (reduce)
import _mod599 from "module_599" /* 599 */;
import baseForOwn from "baseForOwn" /* 601 */;
import baseIteratee from "baseIteratee" /* 720 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod599(arg0)) {
    let tmpResult = tmp(4610);
  } else {
    tmpResult = tmp(4611);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
