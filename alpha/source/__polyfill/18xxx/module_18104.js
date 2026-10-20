// Module ID: 18104
// Function ID: 18105
// Dependencies: [8793, 18105, 18106, 5756]

// Module 18104
import baseFlatten from "baseFlatten" /* 5756 */;
import baseRest from "baseRest" /* 8793 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18105 */;
import baseDifference from "baseDifference" /* 18106 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18105), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
