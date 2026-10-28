// Module ID: 18669
// Function ID: 18670
// Dependencies: [8907, 18670, 18671, 5831]

// Module 18669
import baseFlatten from "baseFlatten" /* 5831 */;
import baseRest from "baseRest" /* 8907 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18670 */;
import baseDifference from "baseDifference" /* 18671 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18670), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
