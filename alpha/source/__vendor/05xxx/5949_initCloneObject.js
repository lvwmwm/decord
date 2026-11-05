// Module ID: 5949
// Function ID: 5950
// Name: initCloneObject
// Dependencies: [545, 5950, 5951]

// Module 5949 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5950 */;
import overArg from "overArg" /* 5951 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
