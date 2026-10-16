// Module ID: 5222
// Function ID: 5223
// Name: initCloneObject
// Dependencies: [545, 5223, 5224]

// Module 5222 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5223 */;
import overArg from "overArg" /* 5224 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
