// Module ID: 4391
// Function ID: 4392
// Name: getPolyfill
// Dependencies: [4390, 4392]

// Module 4391 (getPolyfill)
import requirePromise from "requirePromise" /* 4390 */;
import allSettled2 from "allSettled" /* 4392 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = allSettled2;
  }
  return allSettled;
};
