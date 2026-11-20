// Module ID: 18926
// Function ID: 18927
// Dependencies: [7152, 18927, 18928, 5616]

// Module 18926
import baseFlatten from "baseFlatten" /* 5616 */;
import baseRest from "baseRest" /* 7152 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18927 */;
import baseDifference from "baseDifference" /* 18928 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18927), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
