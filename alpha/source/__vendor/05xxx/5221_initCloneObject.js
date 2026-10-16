// Module ID: 5221
// Function ID: 5222
// Name: initCloneObject
// Dependencies: [545, 5222, 5223]

// Module 5221 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5222 */;
import overArg from "overArg" /* 5223 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
