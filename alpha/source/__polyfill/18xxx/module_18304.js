// Module ID: 18304
// Function ID: 18305
// Dependencies: [8848, 18305, 18306, 5781]

// Module 18304
import baseFlatten from "baseFlatten" /* 5781 */;
import baseRest from "baseRest" /* 8848 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18305 */;
import baseDifference from "baseDifference" /* 18306 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18305), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
