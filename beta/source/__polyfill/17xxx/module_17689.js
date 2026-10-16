// Module ID: 17689
// Function ID: 17690
// Dependencies: [8499, 17690, 17691, 5193]

// Module 17689
import baseFlatten from "baseFlatten" /* 5193 */;
import baseRest from "baseRest" /* 8499 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17690 */;
import baseDifference from "baseDifference" /* 17691 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17690), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
