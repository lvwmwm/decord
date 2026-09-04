// Module ID: 4604
// Function ID: 4605
// Name: initCloneObject
// Dependencies: [627, 4605, 4606]

// Module 4604 (initCloneObject)
import isPrototype from "isPrototype" /* 627 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4605)(tmp3(4606)(arg0));
      const tmp = tmp3(4605);
    }
    return {};
  }
};
