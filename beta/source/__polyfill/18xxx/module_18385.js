// Module ID: 18385
// Function ID: 18386
// Dependencies: [8873, 18386, 18387, 5795]

// Module 18385
import baseFlatten from "baseFlatten" /* 5795 */;
import baseRest from "baseRest" /* 8873 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18386 */;
import baseDifference from "baseDifference" /* 18387 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18386), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
