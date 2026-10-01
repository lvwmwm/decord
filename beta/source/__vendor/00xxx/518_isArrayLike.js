// Module ID: 518
// Function ID: 519
// Name: isArrayLike
// Dependencies: [519, 520]

// Module 518 (isArrayLike)
import isLength from "isLength" /* 519 */;
import isFunction from "isFunction" /* 520 */;


export default function isArrayLike(arg0) {
  const tmp = null != arg0 && isLength(arg0.length) && !isFunction(arg0);
  return tmp;
};
