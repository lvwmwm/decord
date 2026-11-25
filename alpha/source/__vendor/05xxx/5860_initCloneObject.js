// Module ID: 5860
// Function ID: 5861
// Name: initCloneObject
// Dependencies: [545, 5861, 5862]

// Module 5860 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5861 */;
import overArg from "overArg" /* 5862 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
