// Module ID: 19014
// Function ID: 19015
// Dependencies: [8952, 19015, 19016, 5845]

// Module 19014
import baseFlatten from "baseFlatten" /* 5845 */;
import baseRest from "baseRest" /* 8952 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19015 */;
import baseDifference from "baseDifference" /* 19016 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19015), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
