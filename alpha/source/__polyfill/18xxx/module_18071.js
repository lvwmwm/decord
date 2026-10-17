// Module ID: 18071
// Function ID: 18072
// Dependencies: [8777, 18072, 18073, 5292]

// Module 18071
import baseFlatten from "baseFlatten" /* 5292 */;
import baseRest from "baseRest" /* 8777 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18072 */;
import baseDifference from "baseDifference" /* 18073 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18072), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
