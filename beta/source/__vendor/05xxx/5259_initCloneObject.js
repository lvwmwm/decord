// Module ID: 5259
// Function ID: 5260
// Name: initCloneObject
// Dependencies: [545, 5260, 5261]

// Module 5259 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5260 */;
import overArg from "overArg" /* 5261 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
