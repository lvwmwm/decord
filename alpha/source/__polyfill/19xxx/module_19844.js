// Module ID: 19844
// Function ID: 19845
// Dependencies: [7680, 19845, 19846, 6149]

// Module 19844
import baseFlatten from "baseFlatten" /* 6149 */;
import baseRest from "baseRest" /* 7680 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19845 */;
import baseDifference from "baseDifference" /* 19846 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19845), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
