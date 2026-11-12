// Module ID: 19427
// Function ID: 19428
// Dependencies: [9064, 19428, 19429, 6006]

// Module 19427
import baseFlatten from "baseFlatten" /* 6006 */;
import baseRest from "baseRest" /* 9064 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19428 */;
import baseDifference from "baseDifference" /* 19429 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19428), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
