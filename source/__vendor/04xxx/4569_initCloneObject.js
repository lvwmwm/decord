// Module ID: 4569
// Function ID: 4570
// Name: initCloneObject
// Dependencies: [630, 4570, 4571]

// Module 4569 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4570)(tmp3(4571)(arg0));
      const tmp = tmp3(4570);
    }
    return {};
  }
};
