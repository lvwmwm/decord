// Module ID: 4881
// Function ID: 4882
// Dependencies: [4880, 4882]

// Module 4881
import requirePromise from "requirePromise" /* 4880 */;
import _mod4882 from "module_4882" /* 4882 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4882;
  }
  return allSettled;
};
