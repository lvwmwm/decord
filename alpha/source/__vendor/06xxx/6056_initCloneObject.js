// Module ID: 6056
// Function ID: 6057
// Name: initCloneObject
// Dependencies: [545, 6057, 6058]

// Module 6056 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 6057 */;
import overArg from "overArg" /* 6058 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
