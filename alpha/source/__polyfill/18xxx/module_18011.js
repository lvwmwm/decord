// Module ID: 18011
// Function ID: 18012
// Dependencies: [8731, 18012, 18013, 5255]

// Module 18011
import baseFlatten from "baseFlatten" /* 5255 */;
import baseRest from "baseRest" /* 8731 */;
import isArrayLikeObject from "isArrayLikeObject" /* 18012 */;
import baseDifference from "baseDifference" /* 18013 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(18012), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
