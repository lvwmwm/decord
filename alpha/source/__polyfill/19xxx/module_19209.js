// Module ID: 19209
// Function ID: 19210
// Dependencies: [7792, 19210, 19211, 5893]

// Module 19209
import baseFlatten from "baseFlatten" /* 5893 */;
import baseRest from "baseRest" /* 7792 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19210 */;
import baseDifference from "baseDifference" /* 19211 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19210), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
