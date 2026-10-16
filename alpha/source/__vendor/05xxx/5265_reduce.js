// Module ID: 5265
// Function ID: 5266
// Name: reduce
// Dependencies: [514, 5266, 5267, 595, 516]

// Module 5265 (reduce)
import _mod514 from "module_514" /* 514 */;
import createBaseEach from "createBaseEach" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;


export default function reduce(arg0, arg1, arg2) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = tmp(5266);
  } else {
    tmpResult = tmp(5267);
  }
  const tmp4 = arguments.length < 3;
  const tmp5 = baseIteratee(arg1, 4);
  return tmpResult(arg0, tmp5, arg2, tmp4, createBaseEach);
};
