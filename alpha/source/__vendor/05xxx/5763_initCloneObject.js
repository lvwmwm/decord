// Module ID: 5763
// Function ID: 5764
// Name: initCloneObject
// Dependencies: [545, 5764, 5765]

// Module 5763 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5764 */;
import overArg from "overArg" /* 5765 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
