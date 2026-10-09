// Module ID: 17560
// Function ID: 17561
// Dependencies: [8487, 17561, 17562, 5192]

// Module 17560
import baseFlatten from "baseFlatten" /* 5192 */;
import baseRest from "baseRest" /* 8487 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17561 */;
import baseDifference from "baseDifference" /* 17562 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17561), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
