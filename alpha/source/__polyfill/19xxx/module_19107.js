// Module ID: 19107
// Function ID: 19108
// Dependencies: [7153, 19108, 19109, 5614]

// Module 19107
import baseFlatten from "baseFlatten" /* 5614 */;
import baseRest from "baseRest" /* 7153 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19108 */;
import baseDifference from "baseDifference" /* 19109 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19108), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
