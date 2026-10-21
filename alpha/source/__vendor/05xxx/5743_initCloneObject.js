// Module ID: 5743
// Function ID: 5744
// Name: initCloneObject
// Dependencies: [545, 5744, 5745]

// Module 5743 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5744 */;
import overArg from "overArg" /* 5745 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
