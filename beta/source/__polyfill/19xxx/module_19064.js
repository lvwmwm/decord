// Module ID: 19064
// Function ID: 19065
// Dependencies: [7272, 19065, 19066, 5735]

// Module 19064
import baseFlatten from "baseFlatten" /* 5735 */;
import baseRest from "baseRest" /* 7272 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19065 */;
import baseDifference from "baseDifference" /* 19066 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19065), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
