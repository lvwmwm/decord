// Module ID: 5583
// Function ID: 5584
// Name: initCloneObject
// Dependencies: [545, 5584, 5585]

// Module 5583 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5584 */;
import overArg from "overArg" /* 5585 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
