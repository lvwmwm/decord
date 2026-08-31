// Module ID: 4613
// Function ID: 4614
// Name: reduce
// Dependencies: [599, 4614, 4615, 720, 601]

// Module 4613 (reduce)
import _mod599 from "module_599" /* 599 */;
import baseForOwn from "baseForOwn" /* 601 */;
import baseIteratee from "baseIteratee" /* 720 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod599(arg0)) {
    let tmpResult = tmp(4614);
  } else {
    tmpResult = tmp(4615);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
