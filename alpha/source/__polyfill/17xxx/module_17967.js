// Module ID: 17967
// Function ID: 17968
// Dependencies: [8722, 17968, 17969, 5252]

// Module 17967
import baseFlatten from "baseFlatten" /* 5252 */;
import baseRest from "baseRest" /* 8722 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17968 */;
import baseDifference from "baseDifference" /* 17969 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(17968), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
