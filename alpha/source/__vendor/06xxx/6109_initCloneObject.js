// Module ID: 6109
// Function ID: 6110
// Name: initCloneObject
// Dependencies: [545, 6110, 6111]

// Module 6109 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 6110 */;
import overArg from "overArg" /* 6111 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
