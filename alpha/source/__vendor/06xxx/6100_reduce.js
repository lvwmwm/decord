// Module ID: 6100
// Function ID: 6101
// Name: reduce
// Dependencies: [514, 6101, 6102, 583, 516]

// Module 6100 (reduce)
import _mod514 from "module_514" /* 514 */;
import createBaseEach from "createBaseEach" /* 516 */;
import baseIteratee from "baseIteratee" /* 583 */;


export default function reduce(arg0, arg1, arg2) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = tmp(6101);
  } else {
    tmpResult = tmp(6102);
  }
  const tmp4 = arguments.length < 3;
  const tmp5 = baseIteratee(arg1, 4);
  return tmpResult(arg0, tmp5, arg2, tmp4, createBaseEach);
};
