// Module ID: 19609
// Function ID: 19610
// Dependencies: [7604, 19610, 19611, 6089]

// Module 19609
import baseFlatten from "baseFlatten" /* 6089 */;
import baseRest from "baseRest" /* 7604 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19610 */;
import baseDifference from "baseDifference" /* 19611 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19610), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
