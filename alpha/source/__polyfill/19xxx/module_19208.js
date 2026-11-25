// Module ID: 19208
// Function ID: 19209
// Dependencies: [7792, 19209, 19210, 5893]

// Module 19208
import baseFlatten from "baseFlatten" /* 5893 */;
import baseRest from "baseRest" /* 7792 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19209 */;
import baseDifference from "baseDifference" /* 19210 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19209), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
