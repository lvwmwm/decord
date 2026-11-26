// Module ID: 19271
// Function ID: 19272
// Dependencies: [7826, 19272, 19273, 5924]

// Module 19271
import baseFlatten from "baseFlatten" /* 5924 */;
import baseRest from "baseRest" /* 7826 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19272 */;
import baseDifference from "baseDifference" /* 19273 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19272), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
