// Module ID: 19097
// Function ID: 19098
// Dependencies: [7693, 19098, 19099, 5798]

// Module 19097
import baseFlatten from "baseFlatten" /* 5798 */;
import baseRest from "baseRest" /* 7693 */;
import isArrayLikeObject from "isArrayLikeObject" /* 19098 */;
import baseDifference from "baseDifference" /* 19099 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, tmp(19098), true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
