// Module ID: 5219
// Function ID: 5220
// Name: initCloneObject
// Dependencies: [545, 5220, 5221]

// Module 5219 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5220 */;
import overArg from "overArg" /* 5221 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
