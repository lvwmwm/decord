// Module ID: 19294
// Function ID: 19295
// Dependencies: [9097, 19295, 19296, 5979]

// Module 19294
import baseFlatten from "baseFlatten" /* 5979 */;
import baseRest from "baseRest" /* 9097 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19295 */;
import baseDifference from "baseDifference" /* 19296 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19295), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
