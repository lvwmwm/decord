// Module ID: 5158
// Function ID: 5159
// Name: initCloneObject
// Dependencies: [545, 5159, 5160]

// Module 5158 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5159 */;
import overArg from "overArg" /* 5160 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
