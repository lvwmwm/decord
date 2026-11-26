// Module ID: 5891
// Function ID: 5892
// Name: initCloneObject
// Dependencies: [545, 5892, 5893]

// Module 5891 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5892 */;
import overArg from "overArg" /* 5893 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
