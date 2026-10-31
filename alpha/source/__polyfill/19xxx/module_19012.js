// Module ID: 19012
// Function ID: 19013
// Dependencies: [8952, 19013, 19014, 5845]

// Module 19012
import baseFlatten from "baseFlatten" /* 5845 */;
import baseRest from "baseRest" /* 8952 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19013 */;
import baseDifference from "baseDifference" /* 19014 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19013), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
