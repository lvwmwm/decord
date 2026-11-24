// Module ID: 5765
// Function ID: 5766
// Name: initCloneObject
// Dependencies: [545, 5766, 5767]

// Module 5765 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5766 */;
import overArg from "overArg" /* 5767 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
