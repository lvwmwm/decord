// Module ID: 17727
// Function ID: 17728
// Dependencies: [8511, 17728, 17729, 5197]

// Module 17727
import baseFlatten from "baseFlatten" /* 5197 */;
import baseRest from "baseRest" /* 8511 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17728 */;
import baseDifference from "baseDifference" /* 17729 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17728), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
