// Module ID: 5034
// Function ID: 5035
// Dependencies: [5033, 5035]

// Module 5034
import requirePromise from "requirePromise" /* 5033 */;
import _mod5035 from "module_5035" /* 5035 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5035;
  }
  return allSettled;
};
