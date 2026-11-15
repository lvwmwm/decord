// Module ID: 19482
// Function ID: 19483
// Dependencies: [9064, 19483, 19484, 6006]

// Module 19482
import baseFlatten from "baseFlatten" /* 6006 */;
import baseRest from "baseRest" /* 9064 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19483 */;
import baseDifference from "baseDifference" /* 19484 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19483), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
