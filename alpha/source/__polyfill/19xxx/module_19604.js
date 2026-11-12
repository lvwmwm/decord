// Module ID: 19604
// Function ID: 19605
// Dependencies: [7604, 19605, 19606, 6089]

// Module 19604
import baseFlatten from "baseFlatten" /* 6089 */;
import baseRest from "baseRest" /* 7604 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19605 */;
import baseDifference from "baseDifference" /* 19606 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19605), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
