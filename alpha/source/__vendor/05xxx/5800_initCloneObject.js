// Module ID: 5800
// Function ID: 5801
// Name: initCloneObject
// Dependencies: [545, 5801, 5802]

// Module 5800 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5801 */;
import overArg from "overArg" /* 5802 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
