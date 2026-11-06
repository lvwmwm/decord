// Module ID: 5968
// Function ID: 5969
// Name: initCloneObject
// Dependencies: [545, 5969, 5970]

// Module 5968 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5969 */;
import overArg from "overArg" /* 5970 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
