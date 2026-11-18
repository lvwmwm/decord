// Module ID: 19115
// Function ID: 19116
// Dependencies: [7183, 19116, 19117, 5645]

// Module 19115
import baseFlatten from "baseFlatten" /* 5645 */;
import baseRest from "baseRest" /* 7183 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19116 */;
import baseDifference from "baseDifference" /* 19117 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19116), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
