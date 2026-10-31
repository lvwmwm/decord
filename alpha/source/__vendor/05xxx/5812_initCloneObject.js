// Module ID: 5812
// Function ID: 5813
// Name: initCloneObject
// Dependencies: [545, 5813, 5814]

// Module 5812 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5813 */;
import overArg from "overArg" /* 5814 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
