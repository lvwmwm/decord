// Module ID: 5794
// Function ID: 5795
// Name: initCloneObject
// Dependencies: [545, 5795, 5796]

// Module 5794 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5795 */;
import overArg from "overArg" /* 5796 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
