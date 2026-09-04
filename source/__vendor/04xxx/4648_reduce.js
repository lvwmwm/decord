// Module ID: 4648
// Function ID: 4649
// Name: reduce
// Dependencies: [596, 4649, 4650, 717, 598]

// Module 4648 (reduce)
import _mod596 from "module_596" /* 596 */;
import baseForOwn from "baseForOwn" /* 598 */;
import baseIteratee from "baseIteratee" /* 717 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod596(arg0)) {
    let tmpResult = tmp(4649);
  } else {
    tmpResult = tmp(4650);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
