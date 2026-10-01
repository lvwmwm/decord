// Module ID: 4913
// Function ID: 4914
// Name: initCloneObject
// Dependencies: [545, 4914, 4915]

// Module 4913 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 4914 */;
import overArg from "overArg" /* 4915 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
