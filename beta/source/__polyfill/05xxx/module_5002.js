// Module ID: 5002
// Function ID: 5003
// Dependencies: [5001, 5003]

// Module 5002
import requirePromise from "requirePromise" /* 5001 */;
import _mod5003 from "module_5003" /* 5003 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5003;
  }
  return allSettled;
};
