// Module ID: 5612
// Function ID: 5613
// Name: initCloneObject
// Dependencies: [545, 5613, 5614]

// Module 5612 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5613 */;
import overArg from "overArg" /* 5614 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
