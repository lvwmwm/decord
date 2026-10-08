// Module ID: 17412
// Function ID: 17413
// Dependencies: [8479, 17413, 17414, 5191]

// Module 17412
import baseFlatten from "baseFlatten" /* 5191 */;
import baseRest from "baseRest" /* 8479 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17413 */;
import baseDifference from "baseDifference" /* 17414 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17413), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
