// Module ID: 19424
// Function ID: 19425
// Dependencies: [9064, 19425, 19426, 6006]

// Module 19424
import baseFlatten from "baseFlatten" /* 6006 */;
import baseRest from "baseRest" /* 9064 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19425 */;
import baseDifference from "baseDifference" /* 19426 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19425), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
