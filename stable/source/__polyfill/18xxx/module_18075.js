// Module ID: 18075
// Function ID: 18076
// Dependencies: [8777, 18076, 18077, 5292]

// Module 18075
import baseFlatten from "baseFlatten" /* 5292 */;
import baseRest from "baseRest" /* 8777 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18076 */;
import baseDifference from "baseDifference" /* 18077 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18076), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
