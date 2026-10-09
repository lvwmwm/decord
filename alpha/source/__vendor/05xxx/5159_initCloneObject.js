// Module ID: 5159
// Function ID: 5160
// Name: initCloneObject
// Dependencies: [545, 5160, 5161]

// Module 5159 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5160 */;
import overArg from "overArg" /* 5161 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
