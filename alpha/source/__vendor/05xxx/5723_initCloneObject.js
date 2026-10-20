// Module ID: 5723
// Function ID: 5724
// Name: initCloneObject
// Dependencies: [545, 5724, 5725]

// Module 5723 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5724 */;
import overArg from "overArg" /* 5725 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
