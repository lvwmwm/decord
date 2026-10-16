// Module ID: 18001
// Function ID: 18002
// Dependencies: [8730, 18002, 18003, 5254]

// Module 18001
import baseFlatten from "baseFlatten" /* 5254 */;
import baseRest from "baseRest" /* 8730 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18002 */;
import baseDifference from "baseDifference" /* 18003 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18002), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
