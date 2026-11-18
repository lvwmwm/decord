// Module ID: 19800
// Function ID: 19801
// Dependencies: [7670, 19801, 19802, 6142]

// Module 19800
import baseFlatten from "baseFlatten" /* 6142 */;
import baseRest from "baseRest" /* 7670 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19801 */;
import baseDifference from "baseDifference" /* 19802 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19801), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
