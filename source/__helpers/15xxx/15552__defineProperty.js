// Module ID: 15552
// Function ID: 15553
// Name: _defineProperty
// Dependencies: [43]

// Module 15552 (_defineProperty)
import toPropertyKey from "toPropertyKey" /* 43 */;


export default function _defineProperty(arg0, arg1, arg2) {
  const tmp = toPropertyKey(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value: null, enumerable: true, configurable: true, writable: true };
    obj[0] = arg2;
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = arg2;
  }
  return arg0;
};
