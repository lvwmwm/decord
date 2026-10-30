// Module ID: 18963
// Function ID: 18964
// Dependencies: [8943, 18964, 18965, 5840]

// Module 18963
import baseFlatten from "baseFlatten" /* 5840 */;
import baseRest from "baseRest" /* 8943 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18964 */;
import baseDifference from "baseDifference" /* 18965 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18964), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
