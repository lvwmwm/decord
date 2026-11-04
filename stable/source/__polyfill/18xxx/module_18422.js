// Module ID: 18422
// Function ID: 18423
// Dependencies: [8905, 18423, 18424, 5827]

// Module 18422
import baseFlatten from "baseFlatten" /* 5827 */;
import baseRest from "baseRest" /* 8905 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18423 */;
import baseDifference from "baseDifference" /* 18424 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18423), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
