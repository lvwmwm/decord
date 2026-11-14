// Module ID: 6119
// Function ID: 6120
// Name: initCloneObject
// Dependencies: [545, 6120, 6121]

// Module 6119 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 6120 */;
import overArg from "overArg" /* 6121 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
