// Module ID: 5748
// Function ID: 5749
// Name: initCloneObject
// Dependencies: [545, 5749, 5750]

// Module 5748 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5749 */;
import overArg from "overArg" /* 5750 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
