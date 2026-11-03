// Module ID: 19177
// Function ID: 19178
// Dependencies: [9080, 19178, 19179, 5965]

// Module 19177
import baseFlatten from "baseFlatten" /* 5965 */;
import baseRest from "baseRest" /* 9080 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19178 */;
import baseDifference from "baseDifference" /* 19179 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19178), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
