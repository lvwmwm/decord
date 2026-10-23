// Module ID: 8874
// Function ID: 8875
// Name: baseMap
// Dependencies: [518, 516]

// Module 8874 (baseMap)
import isArrayLike from "isArrayLike" /* 518 */;

let tmp;
const createBaseEach = tmp(516);

export default function baseMap(arg0, arg1) {
  let ArrayResult;
  let closure_0 = arg1;
  let sum = -1;
  if (isArrayLike(arg0)) {
    const _Array = Array;
    ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  createBaseEach(arg0, (arg0, arg1, arg2) => {
    sum = sum + 1;
    ArrayResult[sum] = closure_0(arg0, arg1, arg2);
  });
  return ArrayResult;
};
