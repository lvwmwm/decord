// Module ID: 5291
// Function ID: 5292
// Dependencies: [5290, 5292]

// Module 5291
import requirePromise from "requirePromise" /* 5290 */;
import _mod5292 from "module_5292" /* 5292 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5292;
  }
  return allSettled;
};
