// Module ID: 19287
// Function ID: 19288
// Dependencies: [7826, 19288, 19289, 5924]

// Module 19287
import baseFlatten from "baseFlatten" /* 5924 */;
import baseRest from "baseRest" /* 7826 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19288 */;
import baseDifference from "baseDifference" /* 19289 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19288), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
