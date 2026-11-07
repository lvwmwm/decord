// Module ID: 19376
// Function ID: 19377
// Dependencies: [9031, 19377, 19378, 5974]

// Module 19376
import baseFlatten from "baseFlatten" /* 5974 */;
import baseRest from "baseRest" /* 9031 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19377 */;
import baseDifference from "baseDifference" /* 19378 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19377), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
