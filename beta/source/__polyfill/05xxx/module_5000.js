// Module ID: 5000
// Function ID: 5001
// Dependencies: [4999, 5001]

// Module 5000
import requirePromise from "requirePromise" /* 4999 */;
import _mod5001 from "module_5001" /* 5001 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5001;
  }
  return allSettled;
};
