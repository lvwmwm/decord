// Module ID: 5946
// Function ID: 5947
// Name: initCloneObject
// Dependencies: [545, 5947, 5948]

// Module 5946 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5947 */;
import overArg from "overArg" /* 5948 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
