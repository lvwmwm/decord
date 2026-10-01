// Module ID: 520
// Function ID: 521
// Name: isFunction
// Dependencies: [521, 522]

// Module 520 (isFunction)
import isObject from "isObject" /* 521 */;

let tmp;
const baseGetTag = tmp(522);

export default function isFunction(arg0) {
  if (isObject(arg0)) {
    const tmp3 = baseGetTag(arg0);
    return "[object Function]" == tmp3 || "[object GeneratorFunction]" == tmp3 || "[object AsyncFunction]" == tmp3 || "[object Proxy]" == tmp3;
  } else {
    return false;
  }
};
