// Module ID: 19802
// Function ID: 19803
// Dependencies: [7670, 19803, 19804, 6142]

// Module 19802
import baseFlatten from "baseFlatten" /* 6142 */;
import baseRest from "baseRest" /* 7670 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19803 */;
import baseDifference from "baseDifference" /* 19804 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19803), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
