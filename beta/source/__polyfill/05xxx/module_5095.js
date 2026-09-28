// Module ID: 5095
// Function ID: 5096
// Dependencies: [5094, 5096]

// Module 5095
import requirePromise from "requirePromise" /* 5094 */;
import _mod5096 from "module_5096" /* 5096 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5096;
  }
  return allSettled;
};
