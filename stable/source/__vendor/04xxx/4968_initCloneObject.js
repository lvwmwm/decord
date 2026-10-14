// Module ID: 4968
// Function ID: 4969
// Name: initCloneObject
// Dependencies: [545, 4969, 4970]

// Module 4968 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 4969 */;
import overArg from "overArg" /* 4970 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
