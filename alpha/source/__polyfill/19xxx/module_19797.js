// Module ID: 19797
// Function ID: 19798
// Dependencies: [7670, 19798, 19799, 6152]

// Module 19797
import baseFlatten from "baseFlatten" /* 6152 */;
import baseRest from "baseRest" /* 7670 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19798 */;
import baseDifference from "baseDifference" /* 19799 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19798), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
