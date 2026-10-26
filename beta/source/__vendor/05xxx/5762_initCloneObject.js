// Module ID: 5762
// Function ID: 5763
// Name: initCloneObject
// Dependencies: [545, 5763, 5764]

// Module 5762 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5763 */;
import overArg from "overArg" /* 5764 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
