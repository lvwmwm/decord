// Module ID: 5798
// Function ID: 5799
// Name: initCloneObject
// Dependencies: [545, 5799, 5800]

// Module 5798 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5799 */;
import overArg from "overArg" /* 5800 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
