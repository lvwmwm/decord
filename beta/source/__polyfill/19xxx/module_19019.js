// Module ID: 19019
// Function ID: 19020
// Dependencies: [8952, 19020, 19021, 5845]

// Module 19019
import baseFlatten from "baseFlatten" /* 5845 */;
import baseRest from "baseRest" /* 8952 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19020 */;
import baseDifference from "baseDifference" /* 19021 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19020), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
