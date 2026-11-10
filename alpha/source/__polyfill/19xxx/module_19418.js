// Module ID: 19418
// Function ID: 19419
// Dependencies: [9037, 19419, 19420, 5976]

// Module 19418
import baseFlatten from "baseFlatten" /* 5976 */;
import baseRest from "baseRest" /* 9037 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19419 */;
import baseDifference from "baseDifference" /* 19420 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19419), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
