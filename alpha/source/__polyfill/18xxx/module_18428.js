// Module ID: 18428
// Function ID: 18429
// Dependencies: [8873, 18429, 18430, 5796]

// Module 18428
import baseFlatten from "baseFlatten" /* 5796 */;
import baseRest from "baseRest" /* 8873 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18429 */;
import baseDifference from "baseDifference" /* 18430 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18429), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
