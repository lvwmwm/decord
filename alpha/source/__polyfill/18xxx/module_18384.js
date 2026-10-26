// Module ID: 18384
// Function ID: 18385
// Dependencies: [8873, 18385, 18386, 5795]

// Module 18384
import baseFlatten from "baseFlatten" /* 5795 */;
import baseRest from "baseRest" /* 8873 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18385 */;
import baseDifference from "baseDifference" /* 18386 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18385), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
