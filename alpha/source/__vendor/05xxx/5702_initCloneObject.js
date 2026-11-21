// Module ID: 5702
// Function ID: 5703
// Name: initCloneObject
// Dependencies: [545, 5703, 5704]

// Module 5702 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;
import isObject from "isObject" /* 5703 */;
import overArg from "overArg" /* 5704 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
};
