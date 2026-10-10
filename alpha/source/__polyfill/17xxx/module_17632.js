// Module ID: 17632
// Function ID: 17633
// Dependencies: [8503, 17633, 17634, 5193]

// Module 17632
import baseFlatten from "baseFlatten" /* 5193 */;
import baseRest from "baseRest" /* 8503 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17633 */;
import baseDifference from "baseDifference" /* 17634 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17633), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
