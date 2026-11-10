// Module ID: 5943
// Function ID: 5944
// Name: initCloneObject
// Dependencies: [545, 5944, 5945]

// Module 5943 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5944 */;
import overArg from "overArg" /* 5945 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
