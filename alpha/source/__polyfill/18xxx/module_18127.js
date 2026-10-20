// Module ID: 18127
// Function ID: 18128
// Dependencies: [8805, 18128, 18129, 5756]

// Module 18127
import baseFlatten from "baseFlatten" /* 5756 */;
import baseRest from "baseRest" /* 8805 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18128 */;
import baseDifference from "baseDifference" /* 18129 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18128), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
