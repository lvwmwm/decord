// Module ID: 18380
// Function ID: 18381
// Dependencies: [8873, 18381, 18382, 5795]

// Module 18380
import baseFlatten from "baseFlatten" /* 5795 */;
import baseRest from "baseRest" /* 8873 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18381 */;
import baseDifference from "baseDifference" /* 18382 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18381), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
