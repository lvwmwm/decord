// Module ID: 19055
// Function ID: 19056
// Dependencies: [7272, 19056, 19057, 5735]

// Module 19055
import baseFlatten from "baseFlatten" /* 5735 */;
import baseRest from "baseRest" /* 7272 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19056 */;
import baseDifference from "baseDifference" /* 19057 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19056), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
