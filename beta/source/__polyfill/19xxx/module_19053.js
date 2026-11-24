// Module ID: 19053
// Function ID: 19054
// Dependencies: [7272, 19054, 19055, 5735]

// Module 19053
import baseFlatten from "baseFlatten" /* 5735 */;
import baseRest from "baseRest" /* 7272 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19054 */;
import baseDifference from "baseDifference" /* 19055 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19054), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
