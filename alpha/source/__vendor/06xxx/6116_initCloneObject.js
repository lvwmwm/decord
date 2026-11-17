// Module ID: 6116
// Function ID: 6117
// Name: initCloneObject
// Dependencies: [545, 6117, 6118]

// Module 6116 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 6117 */;
import overArg from "overArg" /* 6118 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
