// Module ID: 18282
// Function ID: 18283
// Dependencies: [8841, 18283, 18284, 5781]

// Module 18282
import baseFlatten from "baseFlatten" /* 5781 */;
import baseRest from "baseRest" /* 8841 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18283 */;
import baseDifference from "baseDifference" /* 18284 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18283), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
