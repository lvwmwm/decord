// Module ID: 4766
// Function ID: 4767
// Name: getPolyfill
// Dependencies: [4765, 4767]

// Module 4766 (getPolyfill)
import requirePromise from "requirePromise" /* 4765 */;
import allSettled2 from "allSettled" /* 4767 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};
