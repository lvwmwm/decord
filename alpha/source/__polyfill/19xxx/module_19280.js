// Module ID: 19280
// Function ID: 19281
// Dependencies: [9097, 19281, 19282, 5979]

// Module 19280
import baseFlatten from "baseFlatten" /* 5979 */;
import baseRest from "baseRest" /* 9097 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19281 */;
import baseDifference from "baseDifference" /* 19282 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19281), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
