// Module ID: 17693
// Function ID: 17694
// Dependencies: [8504, 17694, 17695, 5193]

// Module 17693
import baseFlatten from "baseFlatten" /* 5193 */;
import baseRest from "baseRest" /* 8504 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17694 */;
import baseDifference from "baseDifference" /* 17695 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17694), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
