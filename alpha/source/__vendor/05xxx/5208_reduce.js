// Module ID: 5208
// Function ID: 5209
// Name: reduce
// Dependencies: [514, 5209, 5210, 595, 516]

// Module 5208 (reduce)
import _mod514 from "module_514" /* 514 */;
import createBaseEach from "createBaseEach" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;


export default function reduce(arg0, arg1, arg2) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = tmp(5209);
  } else {
    tmpResult = tmp(5210);
  }
  const tmp4 = arguments.length < 3;
  const tmp5 = baseIteratee(arg1, 4);
  return tmpResult(arg0, tmp5, arg2, tmp4, createBaseEach);
};
