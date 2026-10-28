// Module ID: 5842
// Function ID: 5843
// Name: reduce
// Dependencies: [514, 5843, 5844, 595, 516]

// Module 5842 (reduce)
import _mod514 from "module_514" /* 514 */;
import createBaseEach from "createBaseEach" /* 516 */;
import baseIteratee from "baseIteratee" /* 595 */;


export default function reduce(arg0, arg1, arg2) {
  let tmpResult;
  if (_mod514(arg0)) {
    tmpResult = tmp(5843);
  } else {
    tmpResult = tmp(5844);
  }
  const tmp4 = arguments.length < 3;
  const tmp5 = baseIteratee(arg1, 4);
  return tmpResult(arg0, tmp5, arg2, tmp4, createBaseEach);
};
