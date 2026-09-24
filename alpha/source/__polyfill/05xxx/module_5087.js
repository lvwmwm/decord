// Module ID: 5087
// Function ID: 5088
// Dependencies: [5086, 5088]

// Module 5087
import requirePromise from "requirePromise" /* 5086 */;
import _mod5088 from "module_5088" /* 5088 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5088;
  }
  return allSettled;
};
