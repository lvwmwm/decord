// Module ID: 4914
// Function ID: 4915
// Name: initCloneObject
// Dependencies: [545, 4915, 4916]

// Module 4914 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 4915 */;
import overArg from "overArg" /* 4916 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
