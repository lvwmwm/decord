// Module ID: 5941
// Function ID: 5942
// Name: initCloneObject
// Dependencies: [545, 5942, 5943]

// Module 5941 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5942 */;
import overArg from "overArg" /* 5943 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
