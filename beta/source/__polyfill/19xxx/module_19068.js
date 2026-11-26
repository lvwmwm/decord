// Module ID: 19068
// Function ID: 19069
// Dependencies: [7272, 19069, 19070, 5735]

// Module 19068
import baseFlatten from "baseFlatten" /* 5735 */;
import baseRest from "baseRest" /* 7272 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19069 */;
import baseDifference from "baseDifference" /* 19070 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19069), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
