// Module ID: 19799
// Function ID: 19800
// Dependencies: [7670, 19800, 19801, 6142]

// Module 19799
import baseFlatten from "baseFlatten" /* 6142 */;
import baseRest from "baseRest" /* 7670 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19800 */;
import baseDifference from "baseDifference" /* 19801 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19800), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
