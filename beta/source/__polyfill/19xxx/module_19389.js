// Module ID: 19389
// Function ID: 19390
// Dependencies: [9031, 19390, 19391, 5974]

// Module 19389
import baseFlatten from "baseFlatten" /* 5974 */;
import baseRest from "baseRest" /* 9031 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19390 */;
import baseDifference from "baseDifference" /* 19391 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19390), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
