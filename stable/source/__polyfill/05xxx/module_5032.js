// Module ID: 5032
// Function ID: 5033
// Dependencies: [5031, 5033]

// Module 5032
import requirePromise from "requirePromise" /* 5031 */;
import _mod5033 from "module_5033" /* 5033 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5033;
  }
  return allSettled;
};
