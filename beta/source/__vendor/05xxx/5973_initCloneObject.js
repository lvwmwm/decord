// Module ID: 5973
// Function ID: 5974
// Name: initCloneObject
// Dependencies: [545, 5974, 5975]

// Module 5973 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5974 */;
import overArg from "overArg" /* 5975 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
