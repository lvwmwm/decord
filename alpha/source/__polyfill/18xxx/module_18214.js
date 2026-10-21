// Module ID: 18214
// Function ID: 18215
// Dependencies: [8832, 18215, 18216, 5776]

// Module 18214
import baseFlatten from "baseFlatten" /* 5776 */;
import baseRest from "baseRest" /* 8832 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18215 */;
import baseDifference from "baseDifference" /* 18216 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18215), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
