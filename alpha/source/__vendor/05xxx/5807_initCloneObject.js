// Module ID: 5807
// Function ID: 5808
// Name: initCloneObject
// Dependencies: [545, 5808, 5809]

// Module 5807 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5808 */;
import overArg from "overArg" /* 5809 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
