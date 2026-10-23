// Module ID: 5760
// Function ID: 5761
// Name: initCloneObject
// Dependencies: [545, 5761, 5762]

// Module 5760 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5761 */;
import overArg from "overArg" /* 5762 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
