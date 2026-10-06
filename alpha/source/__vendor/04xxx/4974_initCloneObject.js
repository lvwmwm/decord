// Module ID: 4974
// Function ID: 4975
// Name: initCloneObject
// Dependencies: [545, 4975, 4976]

// Module 4974 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 4975 */;
import overArg from "overArg" /* 4976 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
