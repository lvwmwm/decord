// Module ID: 18903
// Function ID: 18904
// Dependencies: [8910, 18904, 18905, 5833]

// Module 18903
import baseFlatten from "baseFlatten" /* 5833 */;
import baseRest from "baseRest" /* 8910 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18904 */;
import baseDifference from "baseDifference" /* 18905 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18904), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
