// Module ID: 18348
// Function ID: 18349
// Dependencies: [8871, 18349, 18350, 5793]

// Module 18348
import baseFlatten from "baseFlatten" /* 5793 */;
import baseRest from "baseRest" /* 8871 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18349 */;
import baseDifference from "baseDifference" /* 18350 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18349), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
