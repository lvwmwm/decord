// Module ID: 5932
// Function ID: 5933
// Name: initCloneObject
// Dependencies: [545, 5933, 5934]

// Module 5932 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5933 */;
import overArg from "overArg" /* 5934 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
