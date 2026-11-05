// Module ID: 19325
// Function ID: 19326
// Dependencies: [9103, 19326, 19327, 5982]

// Module 19325
import baseFlatten from "baseFlatten" /* 5982 */;
import baseRest from "baseRest" /* 9103 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19326 */;
import baseDifference from "baseDifference" /* 19327 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19326), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
