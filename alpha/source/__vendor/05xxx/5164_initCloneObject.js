// Module ID: 5164
// Function ID: 5165
// Name: initCloneObject
// Dependencies: [545, 5165, 5166]

// Module 5164 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5165 */;
import overArg from "overArg" /* 5166 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
