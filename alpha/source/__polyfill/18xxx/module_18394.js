// Module ID: 18394
// Function ID: 18395
// Dependencies: [8873, 18395, 18396, 5795]

// Module 18394
import baseFlatten from "baseFlatten" /* 5795 */;
import baseRest from "baseRest" /* 8873 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18395 */;
import baseDifference from "baseDifference" /* 18396 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18395), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
