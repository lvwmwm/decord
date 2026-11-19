// Module ID: 5581
// Function ID: 5582
// Name: initCloneObject
// Dependencies: [545, 5582, 5583]

// Module 5581 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5582 */;
import overArg from "overArg" /* 5583 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
