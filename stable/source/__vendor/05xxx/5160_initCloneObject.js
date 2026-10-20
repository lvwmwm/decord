// Module ID: 5160
// Function ID: 5161
// Name: initCloneObject
// Dependencies: [545, 5161, 5162]

// Module 5160 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5161 */;
import overArg from "overArg" /* 5162 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
