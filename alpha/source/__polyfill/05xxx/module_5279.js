// Module ID: 5279
// Function ID: 5280
// Dependencies: [5278, 5280]

// Module 5279
import requirePromise from "requirePromise" /* 5278 */;
import _mod5280 from "module_5280" /* 5280 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5280;
  }
  return allSettled;
};
