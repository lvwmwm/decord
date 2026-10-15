// Module ID: 16500
// Function ID: 16501
// Name: _defineProperty
// Dependencies: [43]

// Module 16500 (_defineProperty)
import toPropertyKey from "toPropertyKey" /* 43 */;


export default function _defineProperty(arg0, arg1, value) {
  const tmp = toPropertyKey(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = value;
  }
  return arg0;
};
