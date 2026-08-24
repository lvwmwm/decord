// Module ID: 4596
// Function ID: 4597
// Name: initCloneObject
// Dependencies: [630, 4597, 4598]

// Module 4596 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4597)(tmp3(4598)(arg0));
      const tmp = tmp3(4597);
    }
    return {};
  }
};
