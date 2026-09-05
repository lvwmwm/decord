// Module ID: 4637
// Function ID: 4638
// Name: initCloneObject
// Dependencies: [545, 4638, 4639]

// Module 4637 (initCloneObject)
import isPrototype from "isPrototype" /* 545 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4638)(tmp3(4639)(arg0));
      const tmp = tmp3(4638);
    }
    return {};
  }
};
