// Module ID: 19317
// Function ID: 19318
// Dependencies: [9049, 19318, 19319, 6001]

// Module 19317
import baseFlatten from "baseFlatten" /* 6001 */;
import baseRest from "baseRest" /* 9049 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19318 */;
import baseDifference from "baseDifference" /* 19319 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19318), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
